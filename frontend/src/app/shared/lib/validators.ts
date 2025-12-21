// Verificar si alguna de las claves del objeto están vacías
export function areAllFieldsEmpty<T extends object>(
  obj: T
): boolean {
  return Object.values(obj).every(
    (value) =>
      value === "" &&
      value === null ||
      value === undefined ||
      (typeof value === "string" && value.trim() === "")
  );
}

// Verificar si todos los campos están vacíos
export function areAllFieldsFilled<T extends object>(
  obj: T
): boolean {
  return Object.values(obj).every(
    (value) =>
      value !== "" &&
      value !== null &&
      value !== undefined &&
      !(typeof value === "string" && value.trim() === "")
  );
}


// Validamos si los dos campos son iguales (por ejemplo, para contraseñas)
// export function areTheSameValue(allFields: []){
//   allFields.forEach((key:string, index: number) => {
    
//   })
// }