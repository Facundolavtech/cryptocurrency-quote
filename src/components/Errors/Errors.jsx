import React from 'react'
import './errors.css'

export default function Errors({mensaje}) {
    return (
        <span className="error">
            {mensaje}
        </span>
    )
}
