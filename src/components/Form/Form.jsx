import React from 'react';
import './form.css';

export default function Form() {
    return (
        <div className="form-card">
            <div className="card-header">
                <h1>Cotizador de criptomonedas</h1>
            </div>
            <form>
                <label>Criptomoneda</label>
                <select name="cripto" id="cripto">
                    <option value="">Seleccione una criptomoneda</option>
                </select>
                <label>Moneda Fiat</label>
                <select name="fiat" id="fiat">
                    <option value="">Seleccione una moneda</option>
                </select>
                <input type="submit" name="cotizar" className="cotizar" value="Cotizar"/>
            </form>
        </div>
    )
}
