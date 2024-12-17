iniciarApp();

function iniciarApp(){
    console.log('Iniciando App...');

    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');

    usuarioAutentificado('Cassandra');
}

function usuarioAutentificado(usuario){
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}