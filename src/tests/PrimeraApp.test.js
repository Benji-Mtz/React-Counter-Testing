import { shallow } from 'enzyme';import React from 'react';
import '@testing-library/jest-dom'
import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', () => {
    
    /* test('Debe mostrar el mensaje "Hola soy goku"', () => {
        const saludo = 'Hola, soy Goku';
        const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
        expect( getByText(saludo) ).toBeInTheDocument();
    }) */
    
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola Soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola Soy Goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp
                saludo={ saludo }
                subtitulo={ subTitulo }
            />
        );

        const textoParrafo = wrapper.find('p').text();
        //console.log(textoParrafo);
        expect( textoParrafo ).toBe( subTitulo );
    })
    

})
