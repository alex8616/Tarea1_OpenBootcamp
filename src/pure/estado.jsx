import React from 'react';
import PropTypes from 'prop-types';
import { Newuser } from '../models/contacto.class';


const Estadocomplement = ({newuser}) => {
    return (
        <div>
            <h2>Nombre: { newuser.nombre }</h2>
            
            <h2>Apellido:{ newuser.apellido }</h2>
                 
            <h2>Email: { newuser.email}</h2>
                
            <h2>Estado: { 
                newuser.conectado ? 
                    <p style={{ color: 'green' }}>'Contacto En Línea'</p>:
                    <p style={{ color: 'red' }}>'Contacto No Disponible'</p>
            }</h2>
        </div>
    );
};


Estadocomplement.propTypes = {
    newuser: PropTypes.instanceOf(Newuser)
};


export default Estadocomplement;
