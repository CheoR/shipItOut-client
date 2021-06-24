import React, { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { ProductView1 } from "./ProductView1"
import { ProductView2 } from "./ProductView2"
import { ProductView3 } from "./ProductView3"


export const ProductView = () => {

const [ isLoading, setIsLoading ] = useState(true)
const [ formValues, setFormValues ] = useState({})
const location = useLocation()
const endpoint =  location.pathname.slice(1)
const token = localStorage.getItem("user_token")
const { id } = useParams()

useEffect(() => {
  console.log(" ")
}, [ formValues])

useEffect(() => {
  setIsLoading(true)
  return fetch(`${process.env.REACT_APP_API}/bookings`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
  .then(res => res.json())
  .then(res => {

   // get the container that the product belongs to

    const container = res.find(obj => {
      const prodIndex = obj.products.find(prod => parseInt(prod.product_id) === parseInt(id))

      if(prodIndex !== undefined) {
       return obj
      }
      return undefined;
    })

    const addStep = { ...container }
    addStep['step'] = 3

    return addStep
  }).then(res => {
    setFormValues(res)
    setIsLoading(false)
  })

}, []) // useEffect

if(isLoading) return <>Loading .. </>

 const nextStep = () => {
  const { step } = formValues
  setFormValues({ ...formValues, step: step + 1 })
 }

 const prevStep = () => {
  const { step } = formValues
  setFormValues({ ...formValues, step: step - 1 })
 }


 switch (formValues.step) {
  case 1:
   return (
    <ProductView1
     nextStep={nextStep}
     formValues={formValues}
    />
   )

  case 2:
   return (

    <ProductView2
     nextStep={nextStep}
     prevStep={prevStep}
     formValues={formValues}
    />
   )

  case 3:
   return (

    <ProductView3
     nextStep={nextStep}
     prevStep={prevStep}
     formValues={formValues}
    />
   )

  default:
   return (
    <>Product Loading . . </>
   )

 } // swtich
}
