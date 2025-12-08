//Wrapper de fetch/axios con token, baseURL

// MÉTODOS PERMITIDOS
export type HttpMethod = "GET" | "POST" | "PUT";

// OPCIONES EXTRA PARA NUESTRO CLIENTE:
// Le quitamos con el método Omit el body y method para poder controlarlos nosotros
export interface HttpClientOptions
  extends Omit<RequestInit, "body" | "method"> {
  method?: HttpMethod;
  body?: unknown;
  auth?: boolean; //Requerimos token de autenticación por defecto
}

//TIPO DE ERROR DE LA API:
export interface ApiError extends Error {
  // código HTTP (404, 500...)
  status?: number;
  //   la resupuesta que devuelva la API (mensaje de error, etc.)
  data?: unknown;
}

// URL base de la API (definida en .env)
const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000";

// HELPER PARA LEER EL ACCESS TOKEN DEL STORAGE
function getAccessToken(): string | null {
  return localStorage.getItem("access_token");
}

// HELPER PARA LEER EL REFRESH TOKEN:
function getRefreshToken(): string | null {
  return localStorage.getItem("refresh_token");
}

// HELPER PARA GUARRDAR TOKENS DESPUÉS DE UN REFRESH
// Preguntar: a qué correspondería el refreshToken, qué token se está guardando ahí a parte del token de acceso?
function saveToken(accessToken: string, refreshToken?: string) {
  localStorage.setItem("access_token", accessToken);
  if (refreshToken) {
    localStorage.setItem("refresh_token", refreshToken);
  }
}

// FUNCIÓN QUE REFRESCA EL TOKEN CUANDO LA API DEVUELVE 401
async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;
  try {
    const res = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) {
      return null;
    }

    const data = (await res.json()) as {
      accessToken: string;
      refreshToken?: string;
    };
    saveToken(data.accessToken, data.refreshToken);
    return data.accessToken;
  } catch {
    return null;
  }
}

// CLIENTE PRINCIPAL
export async function httpClient<T>(
  path: string,
  options: HttpClientOptions = {}
): Promise<T> {
  const {
    method = "GET",
    body,
    auth = true,
    headers,
    ...restOptions
  } = options;

  const url = `${API_BASE_URL}${path}`;

  // CONSTRUIMOS HEADERS BASE
  const finalHeaders: HeadersInit = {
    ...(headers ?? {}),
  };

  // SI HAY CUERPO Y NO ES FormData, LO SERIALIZAMOS COMO JSON
  let finalBody: BodyInit | undefined;
  if (body instanceof FormData) {
    finalBody = body;
    // DEJAMOS QUE EL NAVEGADOR PONGA EL Content-Type para FormData
  } else if (body !== undefined && body !== null) {
    finalBody = JSON.stringify(body);
    finalHeaders["Content-Type"] =
      finalHeaders["Content-Type"] ?? "application/json";
  }

  // AÑADIMOS Authorization SI LA PETICIÓN REQUIERE auth
  if (auth) {
    const token = getAccessToken();
    if (token) {
      finalHeaders["Authorizatiuon"] = `Bearer ${token}`;
    }
  }

  // FUNCIÓN INTERNA QUE HACE LA REQUEST REAL (PARA PODER REUTILIZARLA SI HAY QUE REINTENTAR TRAS EL REFRESH)
  const doRequest = async (tokenOverride?: string): Promise<Response> => {
    const headersToUse: HeadersInit = {
      ...finalHeaders,
    };

    // SI NOS PASA UN TOKEN NUEVO (TRAS REFRESH), LO PONEMOS
    if (auth && tokenOverride) {
      headersToUse["Authorization"] = `Bearer ${tokenOverride}`;
    }

    return fetch(url, {
      method,
      body: finalBody,
      headers: headersToUse,
      ...restOptions,
    });
  };

  // PRIMERA LLAMADA
  let response = await doRequest();

  // SI ESTAMOS AUTENTICANDO NOS DEVUELVEN 401, INTENTAMOS REFRESH UNA SOLA VEZ
  if (auth && response.status === 401) {
    const newToken = await refreshAccessToken();

    if (newToken) {
      // REINTENTAMOS LA PETICIÓN UNA VEZ CON EL NUEVO TOKEN
      response = await doRequest(newToken);
    }
  }

  // SI SIGUE SIN ESTAR OK, LANZAMOS UN ERROR ENRIQUECIDO
  if (!response.ok) {
    let errorData: unknown = null;

    try {
      errorData = await response.json();
    } catch {
      // SI NO ES JSON, LO DEJAMOS EN NULL
    }

    const error: ApiError = new Error("Error en la petición HTTP");
    error.status = response.status;
    error.data = errorData;
    throw error;
  }

  // INTENTAMOS PARSEAR JSON. SI NO HAY CONTENIDO (204), DEVOLVEMOS UNDEFINED
  const contentType = response.headers.get("Content-Type") ?? "";
  if (contentType.includes("application/json")) {
    const data = await response.json();
    return data as T;
  }
  // SI LA RESPOUESTA NO ES JSON, DEVOLVEMOS CUALQUIER COSA COMO UNKNOW Y QUE EL CALLER DECIDA
  return undefined as unknown as T;
}
