/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './form.css';
import Resultado from '../Resultado/Resultado'
import Errors from '../Errors/Errors'
import Animation from '../Loader/Loader'

export default function Form() {

    const [criptomoneda, setCriptomoneda] = useState('')
    const [moneda, setMoneda] = useState('')
    const [cotizacion, setCotizacion] = useState([])
    const [resultado, setResultado] = useState({})
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(false)

    const Cotizar = (e) =>{
        e.preventDefault()

        if(!criptomoneda || !moneda) {
            setError(true)
            return
        }

        setLoader(true)

        setTimeout(() => {
            setCotizacion([
                criptomoneda,
                moneda]
            )
            setLoader(false)
        }, 1000);


        setError(false)
        
    }

    useEffect(()=>{
        const consultarAPI = async () => {

            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

            if(moneda === '') return



            const consulta = await fetch(url)

            const result = await consulta.json()
            
            const valor = result.DISPLAY[criptomoneda][moneda]

            setResultado(valor)
        } 

        consultarAPI()

    },[cotizacion])

    return (
        <div className="form-card">
            <div className="card-header">
                <h1>Cotizador de criptomonedas</h1>
            </div>
            <form onSubmit={Cotizar}>
                <label>Criptomoneda</label>
                <select name="cripto" id="cripto" onChange={(e) => setCriptomoneda(e.target.value)}>
                    <option value="">Seleccione una criptomoneda</option>
                    <option value="BTC">Bitcoin</option>
                    <option value="ETH">Ethereum</option>
                    <option value="XRP">Ripple</option>
                    <option value="LTC">Litecoin</option>
                    <option value="BCH">Bitcoin Cash</option>
                </select>
                <label>Moneda Fiat</label>
                <select name="fiat" id="fiat" onChange={(e) => setMoneda(e.target.value)}>
                    <option value="">Seleccione una moneda</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="EUR">Euro</option>
                    <option value="ARS">Peso Argentino</option>
                    <option value="CAD">Dolar Canadiense</option>
                    <option value="NZD">Dolar Neozelandes</option>
                    <option value="AUD">Dolar Australiano</option>
                    <option value="MXN">Peso Mexicano</option>
                </select>
                <input type="submit" name="cotizar" className="cotizar" value="Cotizar"/>
                {(error 
                    ? <Errors mensaje="Todos los campos son obligatorios"/> 
                    : (!loader ? <Resultado resultado={resultado}/> : <Animation />)
                )}
            </form>
        </div>
    )
}
