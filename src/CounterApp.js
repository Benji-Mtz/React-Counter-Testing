import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 100 }) => {

    const [ counter, setCounter ] = useState(value);

    //Boton agregar
    const handleAdd = (e) => {
        setCounter( counter + 1 );
    }
    //Boton Reset
    const handleReset = (e) => setCounter( value );
    
    //Boton restar
    const handleSubs = (e) => setCounter( counter - 1 );


    return ( 
    <Fragment>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        
        <button onClick={ handleSubs } >-1</button>
        <button onClick={ handleReset } >Reset</button>
        <button onClick={ handleAdd } >+1</button>
    </Fragment>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;