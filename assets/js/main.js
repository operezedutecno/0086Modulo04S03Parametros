import { calcular, saludar, sumar } from "./funciones.js";

// saludar("José")

const resultado = sumar(4,1,2,8,10,9,15,20)
// console.log(resultado);


// calcular("sumar", 4,5,6,9)



// Ejemplos de iteración de propiedades de objetos.

const producto = {
    codigo: "111111",
    nombre: "Harina de Trigo",
    tipo: "Con leudante",
    precios: {
        precio_venta: 2000,
        precio_compra: 1500
    }
}
console.log("objeto",producto); //impresión como objeto
// console.log("Object.values",Object.values(producto)); //impresión con valores como arreglo
// console.log("Object.keys",Object.keys(producto)); //impresión con valores como arreglo
// console.log("Object.entries",Object.entries(producto)); //impresión con valores como arreglo


// for (const key of Object.keys(producto)) {
//     console.log(key, producto[key]);
// }


for (const element of Object.entries(producto)) {
    const key = element[0]
    const value = element[1]
    console.log(element);
    console.log(key, value);
}

// Ejemplo con For tradicional
// for (let index = 0; index < Object.entries(producto).length; index++) {
//     const key = Object.entries(producto)[index][0]
//     const value = Object.entries(producto)[index][1]
//     console.log(key, value);
// }


console.log(Object.entries(producto));
console.log(Object.entries(producto)[1][1]);
console.log(Object.entries(producto)[3][1]);

// for (const element of producto) {
//     console.log(element);
// }