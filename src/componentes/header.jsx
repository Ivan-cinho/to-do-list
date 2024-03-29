import React from "react";
import '../estilos/header.css'

const Header = (Props) => {
    return(
        <div className='todoLogoContenedor'>
            <h1 className="tituloDeHeader">Lo que dejaste para despues</h1>
            <img src={require('../imagenes/logo2.png')} className='todoLogo' />
        </div>
    )
}

export default Header

