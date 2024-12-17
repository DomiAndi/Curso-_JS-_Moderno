const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Tablet', precio: 800},
    {nombre: 'Xbox Series X', precio: 6000},
    {nombre: 'PlayStation 5', precio: 8000},
    {nombre: 'Telefono Movil', precio: 1100},
    {nombre: 'Bocinas', precio: 300},
]





for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

carrito.forEach(function(p){
     console.log( `Articulo: ${p.nombre} Precio: $ p.precio}`);
})