import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    
    test('should retornar un heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );
    });
    
    test('should retornar undefined si heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( undefined );

    });

    test('Deberia retornar un arreglo con los heros de dc por filter', () => {
        
        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroes ).toEqual( heroesData ); // Arreglo filtrado
        
    });

    test('Deberia retornar un arreglo del tamaño de registros de heroes de marvel', () => {
        
        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe( 2 );
        
    });
})
