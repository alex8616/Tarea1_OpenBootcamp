import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Newuser } from '../models/contacto.class';


const Estadocomplement = ({newuser}) => {

    //const [conectado, setConectado] = useState(newuser);
    ///const state_user = () => { /* to be added */};
    ///onClick={() => setConectado(!conectado)} conectado === false ? 'Conectado' : 'Desconectado'

    const [conectado, setConectado] = useState(newuser.conectado);
    const newstate = () => { 
        setConectado(!conectado) 
    }

    return (
        <div>
            <h2>Nombre: { newuser.nombre }</h2>
            
            <h2>Apellido:{ newuser.apellido }</h2>
                 
            <h2>Email: { newuser.email}</h2>
                
            <h2>Estado: { conectado ?
                <p style={{ color: 'green' }}>Contacto En Línea</p>:
                <p style={{ color: 'red' }}>Contacto No Disponible</p>}</h2>

            <button onClick={newstate}>CLICK</button>
        </div>
    );
};


Estadocomplement.propTypes = {
    newuser: PropTypes.instanceOf(Newuser)
};


export default Estadocomplement;
