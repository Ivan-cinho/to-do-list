import React, { useState } from 'react';
import '../estilos/tareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

const TareaFormulario = (Props) => {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
        console.log(e.target.value)
    }

    const manejarEnvio = e => {
        e.preventDefault();
        console.log("enviando");
        const tareaNueva = {
            id:uuidv4(),
            texto: input,
            completada: false
        }
        Props.onSubmit(tareaNueva);
    }

    return (
        <form 
        className='tareaFormulario'
        onSubmit={manejarEnvio}>
            <input
                className='tareaInput'
                type='text'
                placeholder='Escribi la tarea'
                name='texto'
                onChange={manejarCambio}
        />
        <button className='tareaBoton'>Agregar tarea</button>
        </form>
    )
}


export default TareaFormulario;