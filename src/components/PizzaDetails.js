import React from 'react'
import styled from 'styled-components'

function PizzaDetails(props) {
    const { details } = props

    return (
        <Div>
            <H1><a href="/">The Pizza Factory</a></H1>
            <H2>Order Details</H2>
            <CardDiv>
            <H3>{details.first_name}</H3>

            <Para>Size: {details.size}</Para>

            <Para>Special Instructions: {details.instruct}</Para>
            </CardDiv>
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
height: 115vh;
padding: 3%;
`

const H1 = styled.h1`
color: #292210;
font-size: 4rem;
margin-left: 3%;
`
const H2 = styled.h2`
color: #292210;
font-size: 2.5rem;
margin-left: 3%
`
const H3 = styled.h3`
color: #292210;
font-size: 2rem;
`
const Para = styled.p`
color: black;
font-size: 1.2rem;
`
const TopsDiv = styled.div`
color: #292210;
font-size: 1.2rem;
max-width: 50%;
padding: 2%;
padding-bottom: 4%;
margin: 3%;
background: gold;
border: 4px solid black
`
const CardDiv = styled.div`
border: 4px solid black;
max-width: 50%;
padding: 2%;
padding-bottom: 4%;
margin: 3%;
background: gold;
`