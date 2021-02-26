import React from 'react'
import Confirm from './Confirm'
import { useHistory, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

function Pizza(props) {

    const { values, change, submit, errors } = props


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { checked, value, name, type } = evt.target
        const valueToUse = type ==='checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <Form onSubmit={onSubmit}>
            <div>
                <H1>Steampunk Pizza</H1>
                <H2>Pizza Preferences</H2>
            </div>
            <div >
                <div>
                    <div>{errors.first_name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.instruct}</div>
                </div>
                <Label>First Name
                    <input
                        type='text'
                        name='first_name'
                        onChange={onChange}
                        value={values.first_name}
                    />
                </Label>
                <Label> Pie Size
                    <select
                        name='size'
                        onChange={onChange}
                        value={values.size}>
                    
                    <option value=''>---Select Size---</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Gigantic'>Gigantic</option>
                    </select>
                </Label>
                <H2>Toppings</H2>
                <Label>Mushrooms
                    <input 
                        type='checkbox'
                        name='mushrooms'
                        onChange={onChange}
                        checked={values.mushrooms}
                    />
                </Label>
                <Label> Cheese
                    <input 
                        type='checkbox'
                        name='cheese'
                        onChange={onChange}
                        checked={values.cheese}
                    />
                </Label>
                <Label> Tomatoes
                    <input 
                        type='checkbox'
                        name='tomatoes'
                        onChange={onChange}
                        checked={values.tomatoes}
                    />
                </Label>
                <Label> Sauce
                    <input 
                        type='checkbox'
                        name='sauce'
                        onChange={onChange}
                        checked={values.sauce}
                    />
                </Label>
                <H2>Special Instructions?</H2>
                <Label> 
                    <input
                        value={values.instruct}
                        onChange={onChange}
                        name='instruct'
                        type='text'
                        placeholder='We are listening'
                    />
                    <H2>Finished?</H2>
                </Label>
                <button id="orderBtn">Add to Order</button>
            </div>
        </Form> 
    )
}
export default Pizza

const Form = styled.form`
background:#292210;
height: 100vh;
`

const H1 = styled.h1`
color: goldenrod;
font-size: 4rem;
`
const H2 = styled.h2`
color: goldenrod;
font-size: 2.5rem;
`
const Label = styled.label`
color: grey;
font-size: 1.2rem;
`