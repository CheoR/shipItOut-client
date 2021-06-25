import React from "react"

import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, FormControl, InputLabel, Select, MenuItem, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, Button } from "@material-ui/core"
import { DateTimePicker } from "@material-ui/pickers"
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { ThemeProvider } from "@material-ui/core/styles"
import { Link } from "react-router-dom"


export const BookingView1 = ({ nextStep, formValues }) => {


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

 return (
  <ThemeProvider>

   <fieldset style={{ margin: "0 auto", width: "60%"}}>
    <h1 style={{ margin: "0 auto", textAlign: "center" }}>View {formValues.booking}</h1>
    <form className={classes.root} noValidate autoComplete="off" style={{ border: "black", width: "100%", margin: "0 auto" }}>
     <Grid container spacing={4} style={{ width: "100%", margin: "0 auto " }}>
      <Grid item xs={4} container direction="column">
       <TextField id="name" name="name" label="Agent Name" defaultValue={formValues.full_name} disabled style={{ width: "50%" }} />
       <TextField id="email" name="email" label="Agent Email" defaultValue={formValues.email} disabled style={{ width: "50%" }} />
       <TextField id="phone" name="phone" label="Agent Phone" defaultValue={formValues.phone} disabled style={{ width: "50%" }} />
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
        <TextField id="service" name="service" label="Service" defaultValue={formValues.service} disabled style={{ width: "50%" }} />
        <TextField id="voyage" name="voyage" label="Voyage" defaultValue={formValues.voyage} disabled style={{ width: "50%" }} />
        <TextField id="carrier" name="carrier" label="Carrier" defaultValue={formValues.carrier} disabled style={{ width: "50%" }} />
        <TextField id="size" name="size" label="Container Type" defaultValue={formValues.size} disabled style={{ width: "50%" }} />
        <TextField id="container" name="container" label="Container" defaultValue={formValues.container} disabled style={{ width: "50%" }} />
        <TextField id="port" name="port" label="Loading Port" defaultValue={formValues.port} disabled style={{ width: "50%" }} />
        <TextField id="destination" name="destination" label="Unloading Port" defaultValue={formValues.destination} disabled style={{ width: "50%" }} />
        <TextField id="booking_status" name="booking_status" label="Booking Status" defaultValue={formValues.booking_status} disabled style={{ width: "50%" }} />

       {/* <FormControl className={classes.formControl} style={{ width: "60%" }}>

        <InputLabel id="serviceSelect">Service</InputLabel>
        <Select
         labelId="serviceSelect"
         id="service"
         name="service"
         value={ formValues.service }
        //  displayEmpty={true}
         label="cow"
         placeholder="hola"
         
         fontWeight="fontWeightBold"
        >
          <MenuItem value="" disabled>
            { formValues.service }
          </MenuItem>
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }} disabled>
        <InputLabel id="voyageSelect">Voyage</InputLabel>
        <Select
         labelId="voyageSelect"
         id="voyage"
         name="voyage"
         value={formValues.voyage}
         
        >
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }} disabled>
        <InputLabel id="carrierSelect">Carrier</InputLabel>
        <Select
         labelId="carrierSelect"
         id="carrier"
         name="carrier"
         value={formValues.carrier}
        >
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }} disabled>
        <InputLabel id="sizeSelect">Container Type</InputLabel>
        <Select
         labelId="sizeSelect"
         id="size"
         name="size"
         value={formValues.size}
        >
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }} disabled>
        <InputLabel id="containerSelect">Container</InputLabel>
        <Select
         labelId="containerSelect"
         id="container"
         name="container"
         value={formValues.container}
        >
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }} disabled>
        <InputLabel id="portSelect" >Loading Port</InputLabel>
        <Select
         labelId="portSelect"
         id="port"
         name="port"
         value={formValues.port}
        >
        </Select>
       </FormControl>


       <FormControl className={classes.formControl} style={{ width: "60%" }} disabled >
        <InputLabel id="destinationSelect">Unloading Port</InputLabel>
        <Select
         labelId="destinationSelect"
         id="destination"
         name="destination"
         value={formValues.destination}
        >
        </Select>
       </FormControl>

       <FormControl className={classes.formControl} style={{ width: "60%" }} disabled >
        <InputLabel id="statusSelect">Status</InputLabel>
        <Select
         labelId="statusSelect"
         id="status"
         name="status"
         value={formValues.status}
        >
        </Select>
       </FormControl>  */}
      </Grid>

      <Grid item xs={4}>
       <FormControl component="fieldset" className={classes.formControl} disabled>
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
        disabled
       />

       <DateTimePicker
        style={{ width: '100%' }}
        value={formValues.port_cut}

        label="Port Cut"
        showTodayButton
        disabled
       />

       <DateTimePicker
        style={{ width: '100%' }}
        value={formValues.rail_cut}
        disablePast

        label="Rail Cut"
        showTodayButton
        disabled
       />
       <TextField
        id="address"
        name="address"
        label="Pickup Address"
        defaultValue={formValues.address}
        style={{ width: "100%" }}
        disabled
        
       />
       <TextareaAutosize
        id="bkg_notes"
        name="bkg_notes"
        aria-label="empty textarea"
        placeholder="Booking Notes"
        value={formValues.booking_notes}
        style={{ width: "100%" }}
        rowsMin={5}
        disabled
        
       />
      </Grid>
     </Grid>
    </form>
   </fieldset >
  </ThemeProvider>

 )
}
