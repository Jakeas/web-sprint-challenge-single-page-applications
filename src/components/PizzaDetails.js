import React from 'react'
import styled from 'styled-components'

function PizzaDetails(props) {
    const { details } = props

    return (
        <Div>
            <H1><a href="/">The Pizza Factory</a></H1>
            <H2>Order Details</H2>
            <H3>{details.first_name}</H3>

            <Para>Size: {details.size}</Para>

            <Para>Special Instructions: {details.instruct}</Para>
            
    {
        !!details.toppings && !!details.toppings.length &&
        <TopsDiv> Toppings Selected: 
            <ul>
                {details.toppings.map((like, idx) => <li key={idx}>{like }</li> )}
            </ul>
        </TopsDiv>
    }

        </Div>
    )
}

export default PizzaDetails

const Div = styled.div`
background:goldenrod;
height: 75vh;
padding: 3%;
`

const H1 = styled.h1`
color: #292210;
font-size: 4rem;
`
const H2 = styled.h2`
color: #292210;
font-size: 2.5rem;
`
const H3 = styled.h3`
color: #292210;
font-size: 2rem;
`
const Para = styled.p`
color: grey;
font-size: 1.2rem;
`
const TopsDiv = styled.div`
color: #292210;
font-size: 1.2rem;
`