import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BkgPage1 } from './BkgPage1'
import { BkgPage2 } from './BkgPage2'
import { BkgPage3 } from './BkgPage3'

export const BkgPage = () => {
  let token = localStorage.getItem('user_token')
  let location = useLocation()
  const [ , endpoint, action, instance] = location.pathname.split('/')

  const [formValues, setFormValues] = useState({
    // pages
    step: 1,
    // booking
    unloading_destination_address: '',
    loading_origin_address: '',
    pickup_address: '',
    pickup_appt: new Date(),
    port_cutoff: new Date(),
    rail_cutoff: new Date(),
    delivery_address: '',
    delivery_appt: new Date(),
    booking_status: 1,
    are_documents_ready: false,
    are_dues_paid: false,
    has_issue: false,
    booking_notes: '',
    carrier: 0,
    voyage: 0,
    loading_port: 0,
    unloading_port: 0,
    // container
    container: 0,
    container_notes: '',
    equipment_location: 0,
    is_container_damaged: false,
    is_needs_inspection: false,
    is_overweight: false,
    // product
    product: '',
    weight: 0,
    product_notes: '',
    is_product_damaged: false,
    is_hazardous: false,
    is_fragile: false,
    is_reefer: false,
  })

    useEffect(() => {
      const fetchBooking = () => {
        return fetch(`${process.env.REACT_APP_API}/${endpoint}/${instance}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            res.step = 1
            res.instance = instance
            setFormValues(res)
          })
      }
      if(location.pathname.includes('update')) {
        fetchBooking()
      }
  }, [action, instance, token, location.pathname])


  const nextStep = () => {
    const { step } = formValues
    setFormValues({ ...formValues, step: step + 1 })
  }

  const prevStep = () => {
    const { step } = formValues
    setFormValues({ ...formValues, step: step - 1 })
  }

  const handleSubmit = (e) => {
    // TODO: REMOVE funciton if id doesn't do anything
    // figure out why it's needed if at all
    e.preventDefault()
    console.log(formValues)
  }

  const handleDatePickerChange = (e, name) => {
    setFormValues({
      ...formValues,
      [name]: e,
    })
  }

  const handleCheckBoxChange = (e) => {
    const { name, checked } = e.target
    setFormValues({
      ...formValues,
      [name]: checked,
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  switch (formValues.step) {
    case 1:
      return (
        <BkgPage1
          handleDatePickerChange={handleDatePickerChange}
          handleCheckBoxChange={handleCheckBoxChange}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          nextStep={nextStep}
          formValues={formValues}
        />
      )

    case 2:
      return (
        <BkgPage2
          handleCheckBoxChange={handleCheckBoxChange}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          prevStep={prevStep}
          nextStep={nextStep}
          formValues={formValues}
        />
      )

    case 3:
      return (
        <BkgPage3
          handleCheckBoxChange={handleCheckBoxChange}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          prevStep={prevStep}
          formValues={formValues}
        />
      )
    case 5:
      return <>Back to Booking Page</>

    default:
      return <>Oops, you shouldn't be here</>
  }
}