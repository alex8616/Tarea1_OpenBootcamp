import React from 'react';
import Estadocomplement from '../pure/estado';
import { Newuser } from '../models/contacto.class';


const ContactoComponent = () => {

    const defaultUsuario = new Newuser('Alejandro','Ventura Fuentes','aledar16@gmail.com',false);

    return (
        <div>
            <Estadocomplement newuser={defaultUsuario}></Estadocomplement>
        </div>
    );
};


export default ContactoComponent;
