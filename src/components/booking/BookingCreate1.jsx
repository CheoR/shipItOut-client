import React, { useState, useEffect } from "react"

import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, Button } from "@material-ui/core"
import { DateTimePicker } from "@material-ui/pickers"
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { ThemeProvider } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
  const token = localStorage.getItem("user_token")


export const BookingCreate1 = ({ nextStep, formValues, setFormValues }) => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ dropDowns, setDropdowns ] = useState({
   services: ['WC', 'EC', 'NE', 'SE', 'GU'],
   vessels: [
     "Alopochen aegyptiacus",
     "Alouatta seniculus",
     "Bos frontalis",
     "Canae Ipsum",
     "Ceratotherium simum",
     "Chelodina longicollis",
     "Cordylus giganteus",
     "Hystrix cristata",
     "Laniarius ferrugineus",
     "Mazama gouazoubira",
     "Merops nubicus",
     "Otaria flavescens",
     "Pandon haliaetus",
     "Parus atricapillus",
     "Podargus strigoides",
     "Porphyrio porphyrio",
     "Tiliqua scincoides",
     "Tragelaphus scriptus",
     "Turtur chalcospilos"
   ],
   voyages: [
     "ECWC6819",
     "ECWC1096",
     "WCWC6768",
     "WCWC0017",
     "WCWC1666",
     "WCEC7061",
     "WCWC2849",
     "WCWC9742",
     "WCEC3604",
     "WCEC8090"
   ],
   containers: [
     "WUSA2162",
     "KFJL3381",
     "TOTX0380",
     "GNXI3314",
     "BZAJ1118"
   ],
   carriers: [
      "Adams-Armstrong",
      "Hettinger and Sons",
      "Kuvalis, Wilkinson and McClure",
      "Olson, Kemmer and Wolff",
      "Ortiz, Muller and Berge",
      "Pollich Group",
      "Rice Inc"
   ],
   ports: [
     "USBLT",
     "USBRV",
     "USCHS",
     "USCLA",
     "USCLB",
     "USGLV",
     "USGRN",
     "USHOU",
     "USJCK",
     "USMBL",
     "USMIA",
     "USNSH",
     "USNWO",
     "USNYC",
     "USOAK",
     "USPHL",
     "USPTA",
     "USSAV",
     "USSEA",
     "USSTK"
   ]
  })


 const useStyles = makeStyles((theme) => ({
  root: {
   '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: 80,
   },
  },
  formControl: {
   margin: theme.spacing(1),
   minWidth: 120,
  },
  selectEmpty: {
   marginTop: theme.spacing(2),
  },
  button: {
   margin: theme.spacing(1),
  },
 }));


 const classes = useStyles();

 const next = (e) => {
  e.preventDefault()
  nextStep()
 }

 if(isLoading) return <>Loading . . .</>

 return (
  <ThemeProvider>

   <fieldset style={{ margin: "0 auto", width: "60%"}}>
    <h1 style={{ margin: "0 auto", textAlign: "center" }}>Create Boooking</h1>
    <form className={classes.root} noValidate autoComplete="off" style={{ border: "black", width: "100%", margin: "0 auto" }}>
     <Grid container spacing={4} style={{ width: "100%", margin: "0 auto " }}>
      <Grid item xs={4} container direction="column">
       <TextField id="name" name="name" label="Agent Name" defaultValue={formValues.full_name} disabled style={{ width: "50%" }} />
       <TextField id="email" name="email" label="Agent Email" defaultValue={formValues.email}  disabled style={{ width: "50%" }} />
       <TextField id="phone" name="phone" label="Agent Phone" defaultValue={formValues.phone}  disabled style={{ width: "50%" }} />
       <div style={{width: "100%", marginTop: "100%", display: "flex", justifyContent: "space-between"}}>
        <Button 
         variant="contained" 
         color="secondary" 
         label="cabcek" 
         component={Link}
          to="/bookings"
         className={classes.button}
         >
          Cancel
        </Button>
        <Button></Button>
        <Button
         variant="contained"
         color="secondary"
         label="continue"
         className={classes.button}
         onClick={next}
        >
         Next
        </Button>

       </div>

      </Grid>

      <Grid item xs={4}>
        {/* <TextField id="service" name="service" label="Service" defaultValue={formValues.service}  style={{ width: "50%" }} />
        <TextField id="voyage" name="voyage" label="Voyage" defaultValue={formValues.voyage}  style={{ width: "50%" }} />
        <TextField id="carrier" name="carrier" label="Carrier" defaultValue={formValues.carrier}  style={{ width: "50%" }} />
        <TextField id="size" name="size" label="Container Type" defaultValue={formValues.size}  style={{ width: "50%" }} />
        <TextField id="container" name="container" label="Container" defaultValue={formValues.container}  style={{ width: "50%" }} />
        <TextField id="port" name="port" label="Loading Port" defaultValue={formValues.port}  style={{ width: "50%" }} />
        <TextField id="destination" name="destination" label="Unloading Port" defaultValue={formValues.destination}  style={{ width: "50%" }} />
        <TextField id="booking_status" name="booking_status" label="Booking Status" defaultValue={formValues.booking_status}  style={{ width: "50%" }} /> */}

       <FormControl className={classes.formControl} style={{ width: "60%" }}>

        <InputLabel id="serviceSelect">Service</InputLabel>
        <Select
         labelId="serviceSelect"
         id="service"
         name="service"
         value={ formValues.service }
           // onChange={handleInputChange}
         fontWeight="fontWeightBold"
        >
          {
          dropDowns.services.map(s => <MenuItem key={s.id} id={s.id} value={s.id}>{s.name}</MenuItem>)
         }
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }} >
        <InputLabel id="voyageSelect">Voyage</InputLabel>
        <Select
         labelId="voyageSelect"
         id="voyage"
         name="voyage"
         value={formValues.voyage}
         
        >
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }} >
        <InputLabel id="carrierSelect">Carrier</InputLabel>
        <Select
         labelId="carrierSelect"
         id="carrier"
         name="carrier"
         value={formValues.carrier}
        >
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }} >
        <InputLabel id="sizeSelect">Container Type</InputLabel>
        <Select
         labelId="sizeSelect"
         id="size"
         name="size"
         value={formValues.size}
        >
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }} >
        <InputLabel id="containerSelect">Container</InputLabel>
        <Select
         labelId="containerSelect"
         id="container"
         name="container"
         value={formValues.container}
        >
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }} >
        <InputLabel id="portSelect" >Loading Port</InputLabel>
        <Select
         labelId="portSelect"
         id="port"
         name="port"
         value={formValues.port}
        >
        </Select>
       </FormControl>


       <FormControl className={classes.formControl} style={{ width: "60%" }}  >
        <InputLabel id="destinationSelect">Unloading Port</InputLabel>
        <Select
         labelId="destinationSelect"
         id="destination"
         name="destination"
         value={formValues.destination}
        >
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }}  >
        <InputLabel id="statusSelect">Status</InputLabel>
        <Select
         labelId="statusSelect"
         id="status"
         name="status"
         value={formValues.status}
        >
        </Select>
       </FormControl> 
      </Grid>

      <Grid item xs={4}>
       <FormControl component="fieldset" className={classes.formControl} >
        <FormLabel component="legend">Verify About Booking</FormLabel>
        <FormGroup>

         <FormControlLabel
          id="document_submitted"
          name="document_submitted"
          label="Documents"
          control={<Checkbox checked={formValues.document_submitted}  name="document_submitted" />}
         />

         <FormControlLabel
          id="money_owed"
          name="money_owed"
          label="Dues"
          control={<Checkbox checked={formValues.money_owed}  name="money_owed" />}
         />

         <FormControlLabel
          id="issues"
          name="issues"
          label="Issues"
          control={<Checkbox checked={formValues.issues}  name="issues" />}
         />
        </FormGroup>


        <FormHelperText>Safety First</FormHelperText>
       </FormControl>
       <DateTimePicker
        style={{ width: '100%' }}
        value={formValues.pickup_appt}
        
        label="Pick Up"
        showTodayButton
        
       />

       <DateTimePicker
        style={{ width: '100%' }}
        value={formValues.port_cut}

        label="Port Cut"
        showTodayButton
        
       />

       <DateTimePicker
        style={{ width: '100%' }}
        value={formValues.rail_cut}
        disablePast

        label="Rail Cut"
        showTodayButton
        
       />
       <TextField
        id="address"
        name="address"
        label="Pickup Address"
        defaultValue={formValues.address}
        style={{ width: "100%" }}
        
        
       />
       <TextareaAutosize
        id="bkg_notes"
        name="bkg_notes"
        aria-label="empty textarea"
        placeholder="Booking Notes"
        value={formValues.booking_notes}
        style={{ width: "100%" }}
        rowsMin={5}
        
        
       />
      </Grid>
     </Grid>
    </form>
   </fieldset >
  </ThemeProvider>

 )
}
