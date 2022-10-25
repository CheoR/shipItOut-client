import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { UserContext } from '../../../context/UserContext'
import axiosInstance from '../../../utils/axios'
import { Loading } from '../../helpers/Loading'
import { ProductView1 } from './ProductView1'
import { ProductView2 } from './ProductView2'
import { ProductView3 } from './ProductView3'

export const ProductView = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [formValues, setFormValues] = useState({})
  const { user: {token} } = useContext(UserContext)
  const { id } = useParams()

  useEffect(() => {
    console.log(' ')
  }, [formValues])

  useEffect(() => {
    setIsLoading(true)
    return axiosInstance.get(`/bookings`)
      .then((response) => {
        // get the container that the product belongs to

        const container = response.data.find((obj) => {
          const prodIndex = obj.products.find(
            (prod) => parseInt(prod.product_id) === parseInt(id),
          )

          if (prodIndex !== undefined) {
            return obj
          }
          return undefined
        })

        const addStep = { ...container }
        addStep['step'] = 3

        return addStep
      })
      .then((response) => {
        setFormValues(response.data)
        setIsLoading(false)
      })
  }, [id, token])

  if (isLoading) return <Loading text="product" />

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
        <ProductView1
          nextStep={nextStep}
          formValues={formValues}
        />
      )

    case 2:
      return (
        <ProductView2
          nextStep={nextStep}
          prevStep={prevStep}
          formValues={formValues}
        />
      )

    case 3:
      return (
        <ProductView3
          nextStep={nextStep}
          prevStep={prevStep}
          formValues={formValues}
        />
      )

    default:
      return <Loading text="Product" />
  }
}
