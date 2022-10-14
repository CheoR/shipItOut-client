import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Loading } from '../helpers/Loading'
import { BookingCreate1 } from './BookingCreate1'
import { BookingCreate2 } from './BookingCreate2'
import { BookingCreate3 } from './BookingCreate3'

export const BookingCreate = () => {
  const location = useLocation()
  const endpoint = location.pathname.slice(1)
  const token = localStorage.getItem('user_token')

  /*
  username
  agent name
  agent email
  agent number
  role
  compnay
  id
  in_use
  foeign keys
   longitude
   latitude

  
  will be added on the bakend 
  */
  const [formValues, setFormValues] = useState({
    step: 1,
    service: '',
    vessel: '',
    longitude: '',
    latitude: '',
    voyage: '',
    carrier: '',
    port: '',
    port_name: '',
    port_location: '',
    document_submitted: false,
    money_owed: false,
    product: '',
    weight: '',
    product_fragile: '',
    product_haz: '',
    product_damaged: '',
    reefer: '',
    container_available: '',
    container_status: '',
    booking_status: '',
    container: '',
    size: '',
    container_damaged: false,
    needs_inspection: false,
    overweight: '',
    container_notes: '',
    booking: '',
    origin: '',
    destination: '',
    address: '',
    pickup_appt: new Date(),
    port_cutoff: new Date(),
    rail_cutoff: new Date(),
    issues: false,
    booking_notes: '',
  })

  // useEffect(() => {
  //   return fetch(`${process.env.REACT_APP_API}/${endpoint}`, {
  //     headers: {
  //       Authorization: `Token ${token}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //         const addStep = { ...res }
  //         addStep['step'] = 1
  //         setFormValues(addStep)
  //       })

  // }, []) // useEffect

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
        <BookingCreate1
          nextStep={nextStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )

    case 2:
      return (
        <BookingCreate2
          nextStep={nextStep}
          prevStep={prevStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )

    case 3:
      return (
        <BookingCreate3
          nextStep={nextStep}
          prevStep={prevStep}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      )

    default:
      return <Loading text='booking creation' />
  }
}
