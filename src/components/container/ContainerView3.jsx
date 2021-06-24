import React, { useEffect } from "react"

import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, Button } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"


export const ContainerView3 = ({ prevStep, formValues }) => {

console.log(formValues.container)

 useEffect(() => {
   console.log(" ")
 }, [ prevStep])


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


 const back = (e) => {
    e.preventDefault()
    prevStep()
  }

// if(!formValues.length) return <>Loading .. </>

 return (
  <ThemeProvider>

   <fieldset style={{ margin: "0 auto", width: "60%" }} >
    <h1 style={{ margin: "0 auto", textAlign: "center" }}>{formValues.step} View Product</h1>
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
       <TextField id="commodity" name="commodity" label="Commodity" value={formValues.products[0].commodity || ""}  disabled style={{ width: "50%" }} />
       <TextField id="weight" name="weight" type="number" label="Weight (in lbs)" value={formValues.products[0].weight || 0} disabled  style={{ width: "50%" }}  InputLabelProps={{
            shrink: true,
            
          }} inputProps={{ min: 0}}/>
      </Grid>
      <Grid item xs={4}>
       <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Verify About Product</FormLabel>
        <FormGroup>

         <FormControlLabel
          id="product_fragile"
          name="product_fragile"
          label="Fragile"
          control={<Checkbox checked={formValues.products[0].product_fragile} name="product_fragile" />}
          disabled
         />

         <FormControlLabel
          id="product_haz"
          name="product_haz"
          label="Hazardous"
          control={<Checkbox checked={formValues.products[0].product_haz} name="product_haz" />}
          disabled
         />

         <FormControlLabel
          id="reefer"
          name="reefer"
          label="Reefer"
          control={<Checkbox checked={formValues.products[0].reefer} name="reefer" />}
          disabled
         />
         <FormControlLabel
          id="product_damaged"
          name="product_damaged"
          label="Damaged"
          control={<Checkbox checked={formValues.products[0].product_damaged} name="product_damaged" />}
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
