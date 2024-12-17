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

carrito.unshift(producto3);

carrito.push(producto);
carrito.push(producto2);

console.table(carrito);