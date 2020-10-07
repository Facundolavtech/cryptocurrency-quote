import React from 'react'
import './resultado.css'

export default function Resultado({resultado, name}) {

    if(Object.keys(resultado).length === 0) return null

    return (
        <div className="resultado">
            <img src={`https://www.cryptocompare.com/${resultado.IMAGEURL}`} alt=""/>
            <p>{name}</p>
            <p>El precio es: {resultado.PRICE}</p>
            <p>El precio maximo del dia es: {resultado.HIGH24HOUR}</p>
            <p>Cambio en el ultimo dia: {resultado.CHANGEDAY}%</p>
            <p>Cambio la ultima hora: {resultado.CHANGEHOUR}%</p>
            <p>Ultima Actualizacion: {resultado.LASTUPDATE}</p>
        </div>
    )
}
