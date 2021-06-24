// TODO: move flattening to backend

export const filterBookingData = ( data ) => {
 console.log("made it filterBookingData")
 console.table(data)

 return data.map(obj => {
   delete obj.username
   delete obj.full_name
   return obj
 })
}

export const filterContainerData = ( data ) => {
  console.log("made it filterContainerData")
 return data
}

export const filterProductData = ( data ) => {
  console.log("made it filterProductData")
 return data
}

export const filterBookingViewData = ( data ) => {
  console.log("viewset fileter")
  console.table(data)
  const cleanedData = {...data}

  delete cleanedData.username
  delete cleanedData.longitude
  delete cleanedData.latitude


  cleanedData['step'] = 1
  cleanedData['cntr'] = data['container']
  cleanedData['documents'] = data['documents_submitted']
  cleanedData['dues'] = data['money_owed']
  cleanedData['status'] = data['booking_status']
  cleanedData['equipment_type'] = data['size']
  cleanedData['loading_port'] = data['port']
  cleanedData['unloading_port'] = ''
  cleanedData['cntr_notes'] = data['container_notes']
  cleanedData['bkg_notes'] = data['booking_notes']
  cleanedData['pickup'] = data['pickup_appt']
  cleanedData['port_cut'] = data['port_cutoff']
  cleanedData['rail_cut'] = data['rail_cutoff']

  console.log('clean data')
  console.table(cleanedData)
  // cleanedData['cntrDamaged'] = 


                // data['id'] = booking.id
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
                // data['service'] = service.name
                // data['voyage'] = voyage.voyage
                // data['vessel'] = vessel.name
                // data['longitude'] = vessel.longitude
                // data['latitude'] = vessel.latitude
                // data['carrier'] = carrier.name
                // data['container_status'] = cntr_status.status
                // data['container'] = container.container
                // data['size'] = container.equipment_size
                // data['container_damaged'] = container.is_damaged
                // data['overweight'] = container.is_overweight
                // data['needs_inspection'] = container.is_need_inspection
                // data['container_available'] = container.is_in_use
                // data['port'] = port.code
                // data['port_name'] = port.name
                // data['port_location'] = port.location
                // data['port_cutoff'] = booking.port_cutoff
                // data['rail_cutoff'] = booking.rail_cutoff
                // data['document_submitted'] = document.are_docs_ready
                // data['money_owed'] = money.are_dues_paid
                // data['issues'] = booking.has_issue
                // data['booking_notes'] = booking.notes
                // data['container_notes'] = container.notes
                // data['products'] = products




  return cleanedData

}




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
