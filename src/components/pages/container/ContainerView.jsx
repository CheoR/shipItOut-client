import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { UserContext } from '../../../context/UserContext'
import axiosInstance from '../../../utils/axios'
import { ContainerView1 } from './ContainerView1'
import { ContainerView2 } from './ContainerView2'
import { ContainerView3 } from './ContainerView3'
import { Loading } from '../../helpers/Loading'

export const ContainerView = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [formValues, setFormValues] = useState([])
  const { user: {token} } = useContext(UserContext)
  const { id } = useParams()

  useEffect(() => {
    console.log(' ')
  }, [formValues])

  useEffect(() => {
    setIsLoading(true)
    return axiosInstance.get(`/bookings`)
      .then((response) => {
        response = response.data.filter((r) => parseInt(r.id) === parseInt(id))[0]
        const addStep = { ...response }
        addStep['step'] = 2
        return addStep
      })
      .then((response) => {
        setFormValues(response.data)
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
      return <Loading text="Container" />
  }
}
