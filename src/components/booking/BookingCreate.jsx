import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { BookingCreate1 } from "./BookingCreate1"
import { BookingCreate2 } from "./BookingCreate2"
import { BookingCreate3 } from "./BookingCreate3"


export const BookingCreate = () => {

  const location = useLocation()
  const endpoint =  location.pathname.slice(1)
  const token = localStorage.getItem("user_token")
  
  
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
 const [ formValues, setFormValues ] = useState({
   step: 1,
   service: "",
   vessel: "",
   longitude: "",
   latitude: "",
   voyage: "",
   carrier: "",
   port: "",
   port_name: "",
   port_location: "",
   document_submitted: false,
   money_owed: false,
   commodity: "",
   weight: "",
   product_fragile: "",
   product_haz: "",
   product_damaged: "",
   reefer: "",
   container_available: "",
   container_status: "",
   booking_status: "",
   container: "",
   size: "",
   container_damaged: false,
   needs_inspection: false,
   overweight: "",
   container_notes: "",
   booking: "",
   origin: "",
   destination: "",
   address: "",
   pickup_appt: new Date(),
   port_cut: new Date(),
   rail_cut: new Date(),
   issues: false,
   booking_notes: ""

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
   return (
    <>Booking Create Loading . . </>
   )

 } // swtich
}



// {
//     "id": 10,
//     "username": "superuser_bob",
//     "full_name": "Bobby Hill",
//     "phone": "957-512-8694",
//     "role": "dispatch",
//     "company": "Nitzsche, Howe and Hartmann",
//     "email": "superuser@bob.com",
//     "booking_status": "Compete",
//     "booking": "USM8528880",
//     "service": "NE",
//     "voyage": "WCWC1666",
//     "vessel": "Pandon haliaetus",
//     "longitude": 100.2936683,
//     "latitude": 14.8126417,
//     "carrier": "Hettinger and Sons",
//     "container": "BZAJ1118",
//     "container_status": "Yard",
//     "size": "40OG",
//     "id_container": 5,
//     "container_damaged": true,
//     "needs_inspection": false,
//     "overweight": false,
//     "container_available": false,
//     "origin": "Yasinya",
//     "destination": "Nankou",
//     "pickup_appt": "2021-06-11T03:27:53Z",
//     "address": "093 Larry Point",
//     "port": "USMBL",
//     "port_name": "Mobile",
//     "port_location": "Mobile",
//     "rail_cut": null,
//     "port_cut": "2021-06-15T03:27:53Z",
//     "document_submitted": true,
//     "money_owed": true,
//     "issues": true,
//     "booking_notes": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     "container_notes": "In congue. Etiam justo. Etiam pretium iaculis justo.",
//     "products": [
//         {
//             "product_id": 5,
//             "commodity": "Vodka - Hot, Lnferno",
//             "weight": 1967.0,
//             "product_fragile": true,
//             "product_haz": false,
//             "product_damaged": false,
//             "reefer": false
//         }
//     ],
//     "product_1_1_product_id": 5,
//     "product_1_1_commodity": "Vodka - Hot, Lnferno",
//     "product_1_1_weight": 1967.0,
//     "product_1_1_product_fragile": true,
//     "product_1_1_product_haz": false,
//     "product_1_1_product_damaged": false,
//     "product_1_1_reefer": false
// }


                //  data['id'] = booking.id
                // data['username'] = request.auth.user.username
                // data['full_name'] = F"{request.auth.user.first_name} {request.auth.user.last_name}"
                // data['phone'] = user.phone
                // data['role'] = user.role
                // data['company'] = user.company
                // data['email'] = request.auth.user.email
                // data['booking_status'] = status.status
                // data['booking'] = booking.booking
                // data['origin'] = booking.loading_origin
                // data['destination'] = booking.unloading_destination
                // data['pickup_appt'] = booking.pickup_appt
                // data['address'] = booking.pickup_address
                // data['service'] = service.name
                // data['voyage'] = voyage.voyage
                // data['vessel'] = vessel.name
                // data['longitude'] = vessel.longitude
                // data['latitude'] = vessel.latitude
                // data['carrier'] = carrier.name
                // data['container_status'] = cntr_status.status
                // data['container'] = container.container
                // data['size'] = container.equipment_size
                // data['id_container'] = container.id
                // data['container_damaged'] = container.is_damaged
                // data['overweight'] = container.is_overweight
                // data['needs_inspection'] = container.is_need_inspection
                // data['container_available'] = container.is_in_use
                // data['port'] = port.code
                // data['port_name'] = port.name
                // data['port_location'] = port.location
                // data['port_cut'] = booking.port_cutoff
                // data['rail_cut'] = booking.rail_cutoff
                // data['document_submitted'] = document.are_docs_ready
                // data['money_owed'] = money.are_dues_paid
                // data['issues'] = booking.has_issue
                // data['booking_notes'] = booking.notes
                // data['container_notes'] = container.notes
                // data['products'] = products
                // if len(products):
                //     for idxp, value in enumerate(products):
                //         key = F"product_{idxb+1}_{idxp+1}_"

                //         data[key+"product_id"] = value["product_id"]
                //         data[key+"commodity"] = value["commodity"]
                //         data[key+"weight"] = value["weight"]
                //         data[key+"product_fragile"] = value["product_fragile"]
                //         data[key+"product_haz"] = value["product_haz"]
                //         data[key+"product_damaged"] = value["product_damaged"]
                //         data[key+"reefer"] = value["reefer"]

