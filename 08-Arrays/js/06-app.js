const carrito = [];

// Definir un producto 

const producto = {
    nombre: "Monitor de 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Telefono Movil",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

let resultado;
resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];

console.table(resultado);
console.log(carrito);