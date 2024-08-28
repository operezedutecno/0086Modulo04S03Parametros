
export const saludar = (nombre, apellido = "") => {
    console.log(`Bienvenido ${nombre} ${apellido}`);
} 

export const sumar = (...numeros) => {
    let suma = 0;
    for (const element of numeros) {
        suma+=element
    }
    return suma
}

export const calcular = (operacion, ...numeros) => {
    console.log("operacion", operacion);
    console.log("números", numeros);
}