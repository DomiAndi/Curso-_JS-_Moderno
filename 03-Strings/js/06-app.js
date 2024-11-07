const producto = 'Monitor 20 Pulgadas';

// .repetear te va a permitir repetir una cadena de texto

// El numero se redondea
const texto = ' en Promocion '.repeat(2.4);

console.log(texto);
console.log(`${producto} ${texto} !!!`);


// Split, dividir un string

const actividad = "Estoy aprendiendo JS Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));

const X = "Aprendiendo JS #JSModernoConJuan";
console.log(X.split('#'));