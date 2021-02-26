import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import Pizza from './pizza'
import styled from 'styled-components'

function Home(props){
const { values, change, submit, errors } = props
    return (
        <HomeContain className="homeContainer">

            <H1>Welcome to The Pizza Factory!</H1>
           <HomeLink>
            <Link to="/pizza" style={{ textDecoration: 'none', color: 'goldenrod', }} >Click me to start making some delicious magic!</Link>
            </HomeLink>
            <Lights></Lights>
            
        </HomeContain>

    )
}

export default Home

const HomeContain = styled.div`
`
const HomeLink = styled.p`
font-size: 2rem;
 background: rgb(114, 0, 0);
 border: 3px solid black;


 text-align: center;
`
const H1 = styled.h1`
font-size: 4rem;
text-align: center;
`
const Lights = styled.div`
background-image: url('https://images.unsplash.com/photo-1559590836-9eb74007ab44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
height: 60vh;
`

