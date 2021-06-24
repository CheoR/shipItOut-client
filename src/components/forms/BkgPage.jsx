import React, { useState } from "react"
import { BkgPage1 } from "./BkgPage1"
import { BkgPage2 } from "./BkgPage2"
import { BkgPage3 } from "./BkgPage3"
import { BkPage4 } from "./BkgPage4"


export const BkgPage = () => {


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
  pickup: new Date(),
  port_cut: new Date(),
  rail_cut: new Date(),
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
  const name = 'pickup'
  setFormValues({
   ...formValues,
   [name]: e,
  })
 }

 const handlePortCutDateChange = (e) => {
  const name = 'port_cut'
  setFormValues({
   ...formValues,
   [name]: e,
  })
 }


 const handleRailCutDateChange = (e) => {
  const name = 'rail_cut'
  setFormValues({
   ...formValues,
      [name]: e,
  })
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
