import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BookingView1 } from './BookingView1'
import { BookingView2 } from './BookingView2'
import { BookingView3 } from './BookingView3'
import { Link as RouterLink } from 'react-router-dom'
import { Loading } from '../helpers/Loading'

export const BookingView = () => {
  const [formValues, setFormValues] = useState([])
  const location = useLocation()
  const endpoint = location.pathname.slice(1)
  const token = localStorage.getItem('user_token')

  useEffect(() => {
    return fetch(`${process.env.REACT_APP_API}/${endpoint}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const addStep = { ...res }
        addStep['step'] = 1
        setFormValues(addStep)
      })
  }, []) // useEffect

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

    default:
      return <Loading text={`${endpoint}`} />
  } // swtich
}
