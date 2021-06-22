import React from "react"

import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, Button } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"

import { agent } from "../forms/TestFormData"


export const BookingView3 = ({ nextStep, prevStep, formValues }) => {


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

 const back = (e) => {
    e.preventDefault()
    prevStep()
  }

   const create = (e) => {
    e.preventDefault()
    console.table('all values')
    console.table(formValues)
  }

 return (
  <ThemeProvider>

   <fieldset style={{ margin: "0 auto", width: "60%" }} >
    <h1 style={{ margin: "0 auto", textAlign: "center" }}>View Product</h1>
    <form className={classes.root} noValidate autoComplete="off" style={{ border: "black", width: "100%", margin: "0 auto" }}>
     <Grid container spacing={4} style={{ width: "100%", margin: "0 auto " }}>
      <Grid item xs={4} container direction="column">
       <TextField id="name" name="name" label="Agent Name" defaultValue={agent.name} disabled style={{ width: "50%" }} />
       <TextField id="email" name="email" label="Agent Email" defaultValue={agent.email} disabled style={{ width: "50%" }} />
       <TextField id="phone" name="phone" label="Agent Phone" defaultValue={agent.phone} disabled style={{ width: "50%" }} />
       <div style={{width: "100%", marginTop: "100%", display: "flex", justifyContent: "space-between"}}>
        <Button 
         variant="contained" 
         color="secondary" 
         label="cabcek" 
         href="/bookings"
         className={classes.button}
        >
          Cancel
        </Button>
        <Button
         variant="contained"
         color="secondary"
         label="continue"
         className={classes.button}
         onClick={back}
        >
         Back
        </Button>

        <></>

       </div>

      </Grid>

      <Grid item xs={4}>
       <TextField id="commodity" name="commodity" label="Commodity" value={formValues.commodity}  disabled style={{ width: "50%" }} />
       <TextField id="weight" name="weight" type="number" label="Weight (in lbs)" value={formValues.weight} disabled  style={{ width: "50%" }}  InputLabelProps={{
            shrink: true,
            
          }} inputProps={{ min: 0}}/>
      </Grid>
      <Grid item xs={4}>
       <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Verify About Product</FormLabel>
        <FormGroup>

         <FormControlLabel
          id="fragile"
          name="fragile"
          label="Fragile"
          control={<Checkbox checked={formValues.fragile} name="fragile" />}
          disabled
         />

         <FormControlLabel
          id="hazardous"
          name="hazardous"
          label="Hazardous"
          control={<Checkbox checked={formValues.hazardous} name="hazardous" />}
          disabled
         />

         <FormControlLabel
          id="reefer"
          name="reefer"
          label="Reefer"
          control={<Checkbox checked={formValues.reefer} name="reefer" />}
          disabled
         />
         <FormControlLabel
          id="productDamaged"
          name="productDamaged"
          label="Damaged"
          control={<Checkbox checked={formValues.productDamaged} name="productDamaged" />}
          disabled
         />
        </FormGroup>


        <FormHelperText>Safety First</FormHelperText>
       </FormControl>
       
      </Grid>
     </Grid>
    </form>
   </fieldset >
  </ThemeProvider>

 )
}
