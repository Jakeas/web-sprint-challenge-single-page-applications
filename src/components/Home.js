import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import Pizza from './pizza'

function Home(props){
const { values, change, submit, errors } = props
    return (
        <div>

            <h1>Welcome to Steampunk Pizza!</h1>
            <Switch>
                {/* { <Route path="/pizza">
                    <Pizza
                        values={values}
                        change={change}
                        submit={submit}
                        errors={errors}
                    />
                </Route> } */}
                
            </Switch>
            <Link to="/pizza">Let's order!</Link>
            
            
        </div>

    )
}

export default Home