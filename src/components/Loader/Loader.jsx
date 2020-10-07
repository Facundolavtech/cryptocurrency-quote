import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import './loader.css'


 export default function Animation(){
     return(
         <div className="loader-container">
            <Loader 
                type="Puff"
                color="rgb(65, 27, 139)"
                height={50}
                width={50}
            />
         </div>
     )
 }