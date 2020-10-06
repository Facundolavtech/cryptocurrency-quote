import React from 'react';
import './form.css';

export default function Form() {
    return (
        <div className="form-card">
            <form>
                <div className="form-header">
                    <h1>Cotizador de criptomonedas</h1>
                </div>
                <div className="form-body">
                    <select name="cripto" id="cripto">
                        <option value="">Seleccione una criptomoneda</option>
                    </select>
                    <select name="fiat" id="fiat">
                        <option value="">Seleccione una moneda</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
