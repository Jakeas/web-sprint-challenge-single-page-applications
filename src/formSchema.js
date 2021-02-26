import React from 'react'
import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required()
        .min(2, 'Name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'gigantic'], 'Size is required'),
    mushrooms: yup.boolean(),
    tomatoes: yup.boolean(),
    sauce: yup.boolean(),
    cheese: yup.boolean(),
    instruct: yup
        .string()
        .trim()
})


export default formSchema