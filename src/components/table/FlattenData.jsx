// TODO: move flattening to backend

export const flattenBookingData = ( data ) => {
 console.log("made it flattenBookingData")
 // console.table(data)

 data.forEach(h => console.log(h))

//  {
//     "id": 19,
//     "booking_status": {
//         "status": "Pending"
//     },
//     "voyage_reference": {
//         "id": 9,
//         "voyage": "WCEC3604",
//         "vessel": {
//             "id": 5,
//             "name": "Ceratotherium simum",
//             "longitude": 122.248779,
//             "latitude": 40.819371,
//             "service": {
//                 "id": 1,
//                 "name": "WC"
//             }
//         }
//     },
//     "booking": "USG4383274",
//     "container": {
//         "id": 4,
//         "container": "GNXI3314",
//         "equipment_size": "40ST",
//         "is_damaged": true,
//         "is_need_inspection": true,
//         "is_overweight": false,
//         "is_in_use": false,
//         "notes": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
//         "container_status": {
//             "id": 2,
//             "status": "Port"
//         }
//     },
//     "carrier": {
//         "id": 6,
//         "name": "Adams-Armstrong"
//     },
//     "loading_origin": "Tríkala",
//     "unloading_destination": "Pora",
//     "pickup_appt": "2021-05-31T14:59:41Z",
//     "port": {
//         "id": 8,
//         "name": "Galveston",
//         "location": "Galveston",
//         "code": "USGLV"
//     },
//     "port_cutoff": "2021-06-04T14:59:41Z",
//     "rail_cutoff": null,
//     "document": {
//         "id": 5,
//         "are_docs_ready": false
//     },
//     "due": {
//         "id": 2,
//         "are_dues_paid": false
//     },
//     "has_issue": true,
//     "notes": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
// }

 return data
}

export const flattenContainerData = ( data ) => {
  console.log("made it flattenContainerData")
 return data
}

export const flattenProductData = ( data ) => {
  console.log("made it flattenProductData")
 return data
}