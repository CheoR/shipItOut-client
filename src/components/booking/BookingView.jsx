import React, { useState } from "react"
import { BookingView1 } from "./BookingView1"
import { BookingView2 } from "./BookingView2"
import { BookingView3 } from "./BookingView3"
import { BookingView4 } from "./BookingView4"

export const BookingView = () => {


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



 // const { step, firstName, lastName, email, occupation, city, bio } = formValues;
 // const values = { firstName, lastName, email, occupation, city, bio }

 switch (formValues.step) {
  case 1:
   return (
    <BookingView1
     nextStep={nextStep}
     formValues={formValues}
    />
   )

  case 2:
   return (

    <BookingView2
     nextStep={nextStep}
     prevStep={prevStep}
     formValues={formValues}
    />
   )

  case 3:
   return (

    <BookingView3
     nextStep={nextStep}
     prevStep={prevStep}
     formValues={formValues}
    />
   )

  case 4:
   return (
    <BookingView4
     nextStep={nextStep}
     backStep={prevStep}
     formValues={formValues}
    />
   )
  case 5:
   return (
    <>Back to Booking Page</>
   )
  default:
   return (
    <>This is BookingsView </>
   )

 } // swtich
}
