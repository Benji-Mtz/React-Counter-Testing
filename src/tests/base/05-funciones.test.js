import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-funciones.js', () => {
    
    test('getUser Debe retornar un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'Username'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );
    })
    test('getUsuarioActivo(nombre) deberia de regresar el objeto con la propiedad nombre recibida como parametro ', () => {
        
        const nameTest = "Benji";

        const userTest = {
            uid: 'ABC567',
            username: nameTest
        }

        const user = getUsuarioActivo(nameTest);

        expect( user ).toEqual( userTest );
    })
    
})
