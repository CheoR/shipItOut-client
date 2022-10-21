import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Loading } from '../helpers/Loading'
import { ContainerView1 } from './ContainerView1'
import { ContainerView2 } from './ContainerView2'
import { ContainerView3 } from './ContainerView3'

export const ContainerView = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [formValues, setFormValues] = useState([])
  const token = localStorage.getItem('user_token')
  const { id } = useParams()

  useEffect(() => {
    console.log(' ')
  }, [formValues])

  useEffect(() => {
    setIsLoading(true)
    return fetch(`${process.env.REACT_APP_API}/bookings`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        res = res.filter((r) => parseInt(r.id) === parseInt(id))[0]
        const addStep = { ...res }
        addStep['step'] = 2
        return addStep
      })
      .then((res) => {
        setFormValues(res)
        setIsLoading(false)
      })
  }, [id, token])

  if (isLoading) return <Loading text="Container" />

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
      return <>Container Loading . . </>
  }
}
