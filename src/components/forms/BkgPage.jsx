import React, { useState } from "react"
import { BkgPage1 } from "./BkgPage1"
import { BkgPage2 } from "./BkgPage2"
import { BkgPage3 } from "./BkgPage3"
import { BkPage4 } from "./BkgPage4"


export const BkgPage = () => {


 const [pickupTime, setPickupTime] = useState(new Date())
 const [portCutTime, setPortCutTime] = useState(new Date())
 const [railCutTime, setRailCutTime] = useState(new Date())


 const [formValues, setFormValues] = useState({
  step: 1,
  service: 0,
  voyage: 0,
  carrier: 0,
  equipment_type: 0,
  cntr: 0,
  loading_port: 0,
  unloading_port: 0,
  status: 1,
  documents: false,
  dues: false,
  issues: false,
  pickup: pickupTime,
  port_cut: portCutTime,
  rail_cut: railCutTime,
  address: "",
  bkg_notes: "",
  cntr_notes: "",
  cntrDamaged: false,
  inspection: false,
  overweight: false,
  commodity: "",
  weight: 0,
  fragile: false,
  hazardous: false,
  reefer: false,
  productDamaged: false
 })



 const nextStep = () => {
  const { step } = formValues
  setFormValues({ ...formValues, step: step + 1 })
 }

 const prevStep = () => {
  const { step } = formValues
  setFormValues({ ...formValues, step: step - 1 })
 }

 // const handleInputChange = (e) => {

 //  const newState = { ...formValues }
 //  newState[e.target.id] = e.target.value
 //  setFormValues(newState)
 // }

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formValues);
 }



 const handlePickupDateChange = (e) => {
  console.log("in handle pick up change")
  console.log(`e.id: ${e.id} e.name: ${e.name} e.label: ${e.label} e.value: ${e.value}`)
  setPickupTime(prevState => e)

  const name = 'pickup'
  setFormValues({
   ...formValues,
   [name]: pickupTime,
  })
  console.log(`pickupTime is ${pickupTime}`)
  console.log(`formValues.pickup is ${formValues.pickup}`)
 }

 const handlePortCutDateChange = (e) => {
  console.log("in handle port cut change")
  console.log(`e.id: ${e.id} e.name: ${e.name} e.label: ${e.label} e.value: ${e.value}`)
  setPortCutTime(prevState => e)

  const name = 'port_cut'
  setFormValues({
   ...formValues,
   [name]: portCutTime,
  })
  console.log(`portCutTime is ${portCutTime}`)
  console.log(`formValues.port_cut is ${formValues.port_cut}`)
 }


 const handleRailCutDateChange = (e) => {
  console.log("in handle rail cut change")
  console.log(`e.id: ${e.id} e.name: ${e.name} e.label: ${e.label} e.value: ${e.value}`)
  setRailCutTime(e)


  const name = 'rail_cut'
  setFormValues({
   ...formValues,
   [name]: railCutTime,
  })
  console.log(`railCutTime is ${railCutTime}`)
  console.log(`formValues.rail_cut is ${formValues.rail_cut}`)
 }


 const handleCheckBoxChange = (e) => {
  setFormValues({ ...formValues, [e.target.name]: e.target.checked })
 }

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormValues({
   ...formValues,
   [name]: value,
  });
 };


 // const { step, firstName, lastName, email, occupation, city, bio } = formValues;
 // const values = { firstName, lastName, email, occupation, city, bio }

 switch (formValues.step) {
  case 1:
   return (
    <BkgPage1
     handleInputChange={handleInputChange}
     handleCheckBoxChange={handleCheckBoxChange}
     handlePickupDateChange={handlePickupDateChange}
     handlePortCutDateChange={handlePortCutDateChange}
     handleRailCutDateChange={handleRailCutDateChange}
     handleSubmit={handleSubmit}
     nextStep={nextStep}
     formValues={formValues}
    />
   )

  case 2:
   return (

    <BkgPage2
     handleInputChange={handleInputChange}
     handleCheckBoxChange={handleCheckBoxChange}
     handlePickupDateChange={handlePickupDateChange}
     handlePortCutDateChange={handlePortCutDateChange}
     handleRailCutDateChange={handleRailCutDateChange}
     handleSubmit={handleSubmit}
     nextStep={nextStep}
     prevStep={prevStep}
     formValues={formValues}
    />
   )

  case 3:
   return (

    <BkgPage3
     handleInputChange={handleInputChange}
     handleCheckBoxChange={handleCheckBoxChange}
     handlePickupDateChange={handlePickupDateChange}
     handlePortCutDateChange={handlePortCutDateChange}
     handleRailCutDateChange={handleRailCutDateChange}
     handleSubmit={handleSubmit}
     nextStep={nextStep}
     prevStep={prevStep}
     formValues={formValues}
    />
   )

  case 4:
   return (
    <BkPage4
     nextStep={nextStep}
     backStep={prevStep}
     handleChange={handleInputChange}
     formValues={formValues}
    />
   )
  case 5:
   return (
    <>Back to Booking Page</>
   )
  
   default:
     return (
       <>Oops, you shouldn't be here</>
     )

 } // swtich
}
