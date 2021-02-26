import React from  'react'
import { Link } from 'react-router-dom'

function Confirm() {
    return(
        <div>
            <h1>Steampunk Pizza</h1>
            <h2>THANK YOU!</h2>
            <h3>Your order will be ready soon</h3>
            <Link to="/pizza">Back</Link>
            <Link to="/">Home</Link>
        </div>
    )
}
export default Confirm