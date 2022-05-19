import '@testing-library/jest-dom';

import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.js',()=>{
    
    test('getSaludo debe de retornar Hola Benji', () => {
        
        const nombre = 'Benji';
        
        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre + '!');
    })
    test('getSaludo debe de retornar Hola Carlos si no hay argumentos en el nombre', () => {
        
        const amigo = 'Amigo';

        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Amigo!');
    })
        
});