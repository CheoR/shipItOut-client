import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { BookingPage1 } from './BookingPage1'
import { BookingPage2 } from './BookingPage2'
import { BookingPage3 } from './BookingPage3'

export const BookingPage = () => {
  let token = localStorage.getItem('user_token')
  let location = useLocation()
  const [ , endpoint, action, instance] = location.pathname.split('/')
  const isView = action === 'view'

  const [ports, setPorts] = useState([])
  const [voyages, setVoyages] = useState([])
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
      if(!location.pathname.includes('create')) {
        fetchBooking()
      }
  }, [action, instance, token, location.pathname])

  useEffect(() => {
      const fetchPorts = () => {
        return fetch(`${process.env.REACT_APP_API}/ports`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
          .then((res) => res.json())
          .then(setPorts)
      }
      fetchPorts()
  }, [])

  useEffect(() => {
      const fetchVoyages = () => {
        return fetch(`${process.env.REACT_APP_API}/voyages`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
          .then((res) => res.json())
          .then(setVoyages)
      }
      fetchVoyages()
  }, [])


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
            voyages
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
