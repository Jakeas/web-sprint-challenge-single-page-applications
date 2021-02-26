import React, {useState, useEffect} from "react";
import axios from 'axios'
import * as yup from 'yup'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Pizza from "./components/pizza";
import formSchema from "./formSchema";
import PizzaDetails from "./components/PizzaDetails"
import Home from "./components/Home"
import Confirm from './components/Confirm'

const initialFormValues = {
    first_name: '',
    size: '',
    
    sauce: false,
    cheese: false,
    mushrooms: false,
    tomatoes: false,

    instruct: '',
  }
  const initialFormErrors = {
    first_name: '',
    size: '',
    instruct: '',
  }

  const initialData = []

  const App = () => {
    const [ data, setData ] = useState(initialData)
    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  
    const postNewData = (newData) => {
      axios
        .post('https://reqres.in/api/data/', newData)
        .then((res) => {
          console.log(res.data)
          setData([res.data, ...data])
        })
        .catch((err) => {
          console.log(err)
        })
        setFormValues(initialFormValues)
    }

    const inputChange = (name,value) => {
      yup
        .reach(formSchema, name)
        .validate(value)
        .then(()=>{
          setFormErrors({...formErrors, [name]: ''})
        })
        .catch((err)=>{
          setFormErrors({...formErrors, [name]: err.errors[0]})
        })
        setFormValues({
          ...formValues, [name]: value
        })
    }

    const formSubmit = () => {
      const newData = {
        first_name: formValues.first_name.trim(),
        size: formValues.size,
        instruct: formValues.instruct.trim(),
        toppings: ['sauce', 'cheese', 'mushrooms', 'tomatoes'].filter(topping => formValues[topping])
      }
      postNewData(newData)
    }

    // useEffect(() => {

    // })

    // useEffect(() => {
    //   formSchema.isValid(formValues).then(valid =>)
    // })

  

  return (
    // <Router>
      <div>
        <Switch>
          <Route path="/pizza">
              <Pizza
               values={formValues}
               change={inputChange}
               submit={formSubmit}
               errors={formErrors}
              />
          </Route>
          <Route path="/Confirm">
              <Confirm />   
          </Route>
          <Route path="/">  
            <Home
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              errors={formErrors}
            /> 
            </Route>
        </Switch>
          {
            data.map((item, i) => {
              return(
                <PizzaDetails key={i} details={item} />
              )
            })
          } 
      </div>
  );
};
export default App;
