//Wrapper de fetch/axios con token, baseURL

export async function httpClient(url: string, options?: RequestInit){
    const res = await fetch(import.meta.env.VITE_API_URL + url, {
        headers: {
            "Content-Type": "application/json",
            ...options?.headers,
        },
        ...options
    });

    if (!res.ok){
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || "Error en la API");
    }

    return res.json();
}