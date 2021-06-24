import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { BookingView1 } from "./BookingView1"
import { BookingView2 } from "./BookingView2"
import { BookingView3 } from "./BookingView3"
import { BookingView4 } from "./BookingView4"

export const BookingView = () => {


//  const [formValues, setFormValues] = useState({
//   step: 1,
//   service: 0,
//   voyage: 0,
//   carrier: 0,
//   equipment_type: 0,
//   cntr: 0,
//   loading_port: 0,
//   unloading_port: 0,
//   status: 1,
//   documents: false,
//   dues: false,
//   issues: false,
//   pickup: new Date(),
//   port_cut: new Date(),
//   rail_cut: new Date(),
//   address: "",
//   bkg_notes: "",
//   cntr_notes: "",
//   cntrDamaged: false,
//   inspection: false,
//   overweight: false,
//   commodity: "",
//   weight: 0,
//   fragile: false,
//   hazardous: false,
//   reefer: false,
//   productDamaged: false
//  })


const [ formValues, setFormValues ] = useState([])
const location = useLocation()
const endpoint =  location.pathname.slice(1)
const token = localStorage.getItem("user_token")

useEffect(() => {
  return fetch(`${process.env.REACT_APP_API}/${endpoint}`, {
    headers: {
      Authorization: `Token ${token}`
    }
  })
  .then(res => res.json())
  .then(res => {
        const addStep = { ...res }
        addStep['step'] = 1
        setFormValues(addStep)
      })
  // .then(res => {
  //   console.log(" in then ")
  //   res = filterBookingViewData({...res})
  //   setData(res)
  //   console.log("new data")
  //   console.table(res)
  // })

}, []) // useEffect

//  useEffect(() => {
      // fetch(`${process.env.REACT_APP_API}/${endpoint}`, {
      //   headers: {
      //     Authorization: `Token ${token}`
      //   }
      // })
//       .then(res => res.json())
//       .then(res => {

//         setData(res)
//         const colHeaders = Object.keys(res[0])

//         const headers = colHeaders.map((header) => {
//           return {
//             field: `${header}`,
//             headerName: `${header}`,
//             description: `${header}`,
//             width: 140
//           }
//         })
//         setColumns(headers)
//         setIsLoading(false)
//       })
//       .catch(err => {
//         const header = 'Data Not Found'
//         setColumns([
//           {
//             field: `${header}`,
//             headerName: `${header}`,
//             description: `${header}`,
//             flex: 1
//           }
//         ])
//         setData([
//           {
//             id: 0,
//             header: header
//           }
//         ])
//         setIsLoading(false)
//       })

//   }, [])



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
    <>Booking Loading . . </>
   )

 } // swtich
}
