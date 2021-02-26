import React from 'react'
import Confirm from './Confirm'
import { useHistory, Switch, Route } from 'react-router-dom'

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

    const history = useHistory()

    const routeToConfirm = () => {
    console.log(history);
    history.push('/Confirm')
  }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h1>Steampunk Pizza</h1>
                <h2>Pizza Preferences</h2>
            </div>
            <div >
            <div>
                <div>{errors.first_name}</div>
                <div>{errors.size}</div>
                <div>{errors.instruct}</div>
            </div>
                <label>First Name
                    <input
                        type='text'
                        name='first_name'
                        onChange={onChange}
                        value={values.first_name}
                    />
                </label>
                <label>
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
                </label>
                <h2>Toppings</h2>
                <label>Mushrooms
                    <input 
                        type='checkbox'
                        name='mushrooms'
                        onChange={onChange}
                        checked={values.mushrooms}
                    />
                </label>
                <label> Cheese
                    <input 
                        type='checkbox'
                        name='cheese'
                        onChange={onChange}
                        checked={values.cheese}
                    />
                </label>
                <label> Tomatoes
                    <input 
                        type='checkbox'
                        name='tomatoes'
                        onChange={onChange}
                        checked={values.tomatoes}
                    />
                </label>
                <label> Sauce
                    <input 
                        type='checkbox'
                        name='sauce'
                        onChange={onChange}
                        checked={values.sauce}
                    />
                </label>
                <label> Special Instructions?
                    <input
                        value={values.instruct}
                        onChange={onChange}
                        name='instruct'
                        type='text'
                        placeholder='We are listening'
                    />
                </label>
                <button id="orderBtn">Add to Order</button>
            </div>
        </form> 
    )
}

export default Pizza