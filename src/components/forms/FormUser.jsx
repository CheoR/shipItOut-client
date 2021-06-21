import React, { useState } from "react"
import { FaLevelUpAlt } from "react-icons/fa"
import { Confirm } from "./Confirm"
import { FormPersonalDetails } from "./FormPersonalDetails"
import { FormUserDetail } from "./FormUserDetail"
import { Success } from "./Success"


export const FormUser = () => {

 const [ formData, setFormData ] = useState({
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  city: "",
  bio: ""
 })



 // proceed to next step
 const nextStep = () => {
  const { step } = formData
  setFormData({...formData, step: step + 1})
 }

  const prevStep = () => {
   const { step } = formData
   setFormData({...formData, step: step - 1})
 }

 const handleInputChange = ( e ) => {

  const newState = { ...formData }
  newState[e.target.id] = e.target.value
  setFormData(newState)
 }
 
 
 const { step, firstName, lastName, email, occupation, city, bio } = formData;
 const values = { firstName, lastName, email, occupation, city, bio }



 switch(step) {
  case 1:
   return (
    <FormUserDetail
      nextStep={nextStep}
      handleChange={handleInputChange}
      values={values}
    />
   )
  
 case 2:
  return (
     <FormPersonalDetails
      nextStep={nextStep}
      backStep={prevStep}
      handleChange={handleInputChange}
      values={values}
    />
  )
 
 case 3:
  return (
     <Confirm
      nextStep={nextStep}
      backStep={prevStep}
      values={values}
    />
  )
 
 case 4:
   return (
    <Success />
   )


 }
}