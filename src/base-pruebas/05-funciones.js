/* console.log('====================================');
console.log('Funciones en JS');
console.log('====================================');
 */
// function saludar(nombre) {
//     return `Hola, ${ nombre }`;
// }

// const saludar = function (nombre) {
//     return `Hola, ${ nombre }`;
// }

/* const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
} */

const saludar3 = (nombre) => `Hola, ${ nombre }`;

const saludar4 = () => 'Hola Mundo';

// console.log(saludar2('Vegeta'));
// console.log(saludar3('Goku'));
// console.log(saludar4());

export const getUser = () => ({
    uid: 'ABC123',
    username: 'Username'
});

// const user = getUser();
// console.log(user);

// Tarea
// 1. Transformar a fn() flecha
// 2. retorna un obj implicito
// 3. pruebas

// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }

export const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});

/* const usuarioActivo = getUsuarioActivo('Benji');
console.log( usuarioActivo ); */

