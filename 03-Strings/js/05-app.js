const producto = 'Monitor 20 Pulgadas';

console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// .slice para cortar
console.log(producto.slice(0, 10) );
// console.log(producto.slice(8) );
// console.log(producto.slice(2, 1) );



// Alternativa a .slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

// slice no hace nada pero substring lo modifica

const usuario = "Hugo";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0, 1));