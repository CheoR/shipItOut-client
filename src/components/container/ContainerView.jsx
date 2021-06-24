import React, { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { ContainerView1 } from "./ContainerView1"
import { ContainerView2 } from "./ContainerView2"
import { ContainerView3 } from "./ContainerView3"


export const ContainerView = () => {

const [ isLoading, setIsLoading ] = useState(true)
const [ formValues, setFormValues ] = useState([])
const location = useLocation()
const endpoint =  location.pathname.slice(1)
const token = localStorage.getItem("user_token")
const { id } = useParams()

useEffect(() => {
  console.log("rerendering")
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
    console.table(res)
    // console.log(Array.isArray(res))
    res = res.filter(r => parseInt(r.id) === parseInt(id))[0]
    // console.log(Array.isArray(res))
    // console.log(id)
    console.log("in then")
    console.log(res)
    const addStep = { ...res }
    addStep['step'] = 2
    // setFormValues(addStep)
    // console.log(formValues)
    // console.log("data is ============================")
    // console.table(formValues)
    // setIsLoading(false)
    return addStep
  }).then(res => {
    console.log("res")
    console.log(res)
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
    <ContainerView1
     nextStep={nextStep}
     formValues={formValues}
    />
   )

  case 2:
   return (

    <ContainerView2
     nextStep={nextStep}
     prevStep={prevStep}
     formValues={formValues}
    />
   )

  case 3:
   return (

    <ContainerView3
     nextStep={nextStep}
     prevStep={prevStep}
     formValues={formValues}
    />
   )

  default:
   return (
    <>Booking Loading . . </>
   )

 } // swtich
}
