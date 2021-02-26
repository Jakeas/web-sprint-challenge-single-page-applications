import React from 'react'

function PizzaDetails(props) {
    const { details } = props

    return (
        <div>
            <h1>Steampunk Pizza</h1>
            <h2>Order Details</h2>
            <h3>{details.first_name}</h3>

            <p>Size: {details.size}</p>

            <p>Special Instructions: {details.instruct}</p>
            
    {
        !!details.toppings && !!details.toppings.length &&
        <div> Toppings Selected: 
            <ul>
                {details.toppings.map((like, idx) => <li key={idx}>{like }</li> )}
            </ul>
        </div>
    }
        </div>
    )
}

export default PizzaDetails