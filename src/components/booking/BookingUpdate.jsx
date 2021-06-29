import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { BookingUpdate1 } from "./BookingUpdate1"
import { BookingUpdate2 } from "./BookingUpdate2"
import { BookingUpdate3 } from "./BookingUpdate3"
import { Link } from "react-router-dom"


export const BookingUpdate = () => {

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
        console.log("res type")
        console.log(Array.isArray(res))
        console.log(res)
        res['step'] = 1
        // const addStep = { ...res, ...{'step': 1 } }
        // addStep['step'] = 1
        // addStep.step = 1
        console.log("addstep type")
        // console.log(Array.isArray(addStep))
        // setFormValues(addStep)
        setFormValues(res)
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
    <BookingUpdate1
     nextStep={nextStep}
     formValues={formValues}
     setFormValues={setFormValues}
    />
   )

  case 2:
   return (

    <BookingUpdate2
     nextStep={nextStep}
     prevStep={prevStep}
     formValues={formValues}
     setFormValues={setFormValues}
    />
   )

  case 3:
   return (

    <BookingUpdate3
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




// import React from "react"

// import { Link } from "react-router-dom"

// import styles from "./BookingUpdate.module.css"

// export const BookingUpdate = () => {
//  const agentDetails = {
//   name: "bkg1",
//   company: "company1",
//   email: "bkgA@email.com",
//   phone: "000-000-0001"
//  }

//  const bookingDetails = {
//   service: "WC",
//   voyage: "voyage1",
//   carrier: "Trucker1",
//   container_type: "20ST",
//   container: "XYZ1234",
//   origin: "NYC, US",
//   destination: "Perth, AU",
//   status: "Pending",
//   documents: false,
//   dues: true,
//   issues: false,
//   pickup:  "06-25-2020 08:30",
//   portcut: "06-29-2020 12:00",
//   railcut: "",
//   address: "123 fake streeet",
//   notes: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto maxime accusamus saepe ducimus minus veritatis delectus inventore necessitatibus. Esse, doloremque."
//  }
//  return (

//   <section className={styles.bookingInfo}>
//    <form className={styles.bookingInfo__form}>
//     <fieldset className={styles.leftSide}>
//      <legend className={styles.sideHeader}>Agent</legend>
//        <div>
//         <label for="contact">Contact:</label><br/>
//         <input type="text" name="contact" id="contact" placeholder={`${agentDetails.name}`} disabled/>
//        </div>
//        <div>
//         <label for="email">Email:</label><br/>
//         <input type="email" name="email" id="email" placeholder={`${agentDetails.email}`} disabled />
//        </div>
//        <div>
//         <label for="phone">Phone:</label><br/>
//         <input type="tel" name="phone" id="phone" placeholder={`${agentDetails.phone}`} disabled/>
//        </div>
//     </fieldset>
//     <fieldset className={styles.rightSide}>
//      <legend className={styles.sideHeader}>Booking</legend>
//        <div>
//         <label for="service">Service:</label><br/>
//         <input type="text" name="service" id="service" placeholder={`${bookingDetails.service}`} disabled/>
//        </div>
//        <div>
//         <label for="carrier">Carrier:</label><br/>
//         <input type="text" name="carrier" id="carrier" placeholder={`${bookingDetails.carrier}`} disabled />
//        </div>
//        <div>
//         <label for="container_type">Container Type:</label><br/>
//         <input type="text" name="container_type" id="container_type" placeholder={`${bookingDetails.container_type}`} disabled/>
//        </div>
//        <div>
//         <label for="container">Container:</label><br/>
//         <input type="text" name="container" id="container" placeholder={`${bookingDetails.container}`} disabled/>
//        </div>
//        <div>
//         <label for="origin">Origin:</label><br/>
//         <input type="text" name="origin" id="origin" placeholder={`${bookingDetails.origin}`} disabled/>
//        </div>
//        <div>
//         <label for="destination">Destination:</label><br/>
//         <input type="text" name="destination" id="destination" placeholder={`${bookingDetails.destination}`} disabled/>
//        </div>
//        <div>
//         <label for="status">Status:</label><br/>
//         <input type="text" name="status" id="status" placeholder={`${bookingDetails.status}`} disabled/>
//        </div>

//        <div className={styles.checkboxes}>
//         <div className={styles.checkbox__item}>
//          <input type="checkbox" name="documents" id="documents" placeholder={`${bookingDetails.documents}`} checked={bookingDetails.documents ? "checked" : ""} disabled/>
//          <label for="documents">Documents Submitted</label>
//         </div>
//         <div className={styles.checkbox__item}>
//          <input type="checkbox" name="dues" id="dues" placeholder={`${bookingDetails.dues}`} checked={bookingDetails.dues ? "checked" : ""}  disabled/>
//          <label for="dues">Money Owed</label>
//         </div>
//         <div className={styles.checkbox__item}>
//          <input type="checkbox" name="issues" id="issues" placeholder={`${bookingDetails.issues}`} checked={bookingDetails.issues ? "checked" : ""}  disabled/>
//          <label for="issues">Issues</label>
//         </div>
//        </div>
//        <div className={styles.times}>
//          <div className={styles.field__item}>
//          <label for="address">Address</label><br/>
//          <input type="text" name="address" id="address" placeholder={`${bookingDetails.address}`} disabled /><br />
//         </div>
//         <div className={styles.field__item}>
//          <label for="pickup">Pickup</label><br/>
//          <input type="datetime-local" name="pickup" id="pickup" placeholder={`${bookingDetails.pickup}`} disabled/><br />
//         </div>
//         <div className={styles.field__item}>
//          <label for="portcut">Portcut</label><br/>
//          <input type="datetime-local" name="portcut" id="portcut" placeholder={`${bookingDetails.portcut}`} disabled/><br />
//         </div>
//         <div className={styles.field__item}>
//          <label for="railcut">Railcut</label><br/>
//          <input type="date" name="railcut" id="railcut" placeholder={`${bookingDetails.railcut}`} disabled/><br />
//         </div>
//         <div className={styles.field__item}>
//         <label for="notes">Notes</label><br/>
//         <textarea id="notes" name="notes" rows="4" cols="20" placeholder={`${bookingDetails.notes}`} disabled ><br />
//         </textarea>
//        </div>       
//        <Link className={styles.navLink} to='/bookings' >
//           <button className={styles.navLinkBtn}>Back</button>
//         </Link>
//        </div>
//     </fieldset>
//    </form>
//   </section>
//  )
// }
