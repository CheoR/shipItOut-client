import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { FormContext } from '../../../context/FormContext'
import axiosInstance from '../../../utils/axios'

import { BookingPage1 } from './BookingPage1'
import { BookingPage2 } from './BookingPage2'
import { BookingPage3 } from './BookingPage3'


export const BookingPage = () => {
  let location = useLocation()
  const [ , endpoint, action, instance] = location.pathname.split('/')
  const isView = action === 'view'

  const { data: { ports, voyages, carriers, isLoading, booking_statuses, container_types, container_locations, containers_available } } = useContext(FormContext)
  const [formValues, setFormValues] = useState({
    // pages
    step: 1,
    agent_first_name: "",
    agent_last_name: "",
    agent_email: "",
    agent_company: "",
    agent_phone: "",
    // booking
    unloading_destination_address: '',
    loading_origin_address: '',
    pickup_address: '',
    pickup_appt: new Date(),
    port_cutoff: new Date(),
    rail_cutoff: new Date(),
    delivery_address: '',
    delivery_appt: new Date(),
    booking_status: 0,
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
    container_location: 6,
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
      return axiosInstance.get(`/${endpoint}/${instance}`)
        .then((response) => {
          response.data.step = 1
          response.data.instance = instance
          setFormValues(response.data)
        })
    }
    if(!location.pathname.includes('create')) {
      fetchBooking()
    }
  }, [action, endpoint, instance, location.pathname])

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

  if (isLoading) return

  switch (formValues.step) {
    case 1:
      return (
        <BookingPage1
          handleDatePickerChange={handleDatePickerChange}
          handleCheckBoxChange={handleCheckBoxChange}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          nextStep={nextStep}
          isView={isView}
          action={action}
          instance={instance}
          formValues={formValues}
          data={{
            ports,
            voyages,
            carriers,
            booking_statuses,
            isLoading,
          }}
        />
      )

    case 2:
      return (
        <BookingPage2
          handleCheckBoxChange={handleCheckBoxChange}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          prevStep={prevStep}
          nextStep={nextStep}
          isView={isView}
          action={action}
          instance={instance}
          formValues={formValues}
          data={{
            container_types,
            container_locations,
            containers_available,
          }}
        />
      )

    case 3:
      return (
        <BookingPage3
          handleCheckBoxChange={handleCheckBoxChange}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          prevStep={prevStep}
          isView={isView}
          action={action}
          instance={instance}
          formValues={formValues}
        />
      )
    case 5:
      return <>Back to Booking Page</>

    default:
      return <>Oops, you shouldn't be here</>
  }
}
