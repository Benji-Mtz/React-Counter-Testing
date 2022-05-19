import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'
import CounterApp from '../CounterApp'


describe('Pruebas en <CounterApp />', () => {

    // wrapper global
    let wrapper = shallow( <CounterApp /> );

    // beforeEach se ejecuta antes de cada test
    beforeEach( ()=>{
        wrapper = shallow( <CounterApp /> );
    });
    
    test('Debe de mostrar <CounterApp /> correctamente', () => {
        
        //const value = 1;
        expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe mostrar el valor por defecto de 100', () => {
        
        const valorDefecto = 100;

        const wrapper = shallow(
            <CounterApp
                value = {valorDefecto}
            />
        );

        const counterText = wrapper.find('h2').text().trim();
        //console.log(counterText);
        expect( counterText ).toBe( `${valorDefecto}` );
    })

    test('debe incrementar con la funcion +1', () => {

        wrapper.find('button').at(2).simulate('click');
        //console.log(bt1.html());
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('101');
    })
    
    test('debe restar con la funcion -1', () => {

        wrapper.find('button').at(0).simulate('click');
        //console.log(bt1.html());
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('99');
    })

    test('debe de colocar el valor por defecto con el btn reset', () => {
        
        const wrapper = shallow( <CounterApp value = { 105 } /> );

        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        //console.log(counterText);

        expect( counterText ).toBe('105');
    })
    

})
