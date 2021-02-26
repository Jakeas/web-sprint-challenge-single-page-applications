import React from 'react'

function PizzaDetails(props) {
    const { details } = props

    return (
        <div>
            <h1>Steampunk Pizza</h1>
            <h2>Order Details</h2>
            <h3>{details.first_name}</h3>
            <p>size: {details.size}</p>
            <p>Special Instructions: {details.instruct}</p>
            
    {
        !!details.toppings && !!details.toppings.length &&
        <p>Toppings Selected: {details.toppings.map((like, idx) => <span key={idx}>{like}</span>)}
        </p>
    }
        </div>
    )
}

export default PizzaDetails