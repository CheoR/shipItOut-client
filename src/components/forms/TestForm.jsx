import { Grid } from "@material-ui/core"
import React, { useState } from "react"
import { FaLevelUpAlt } from "react-icons/fa"
import { Confirm } from "./Confirm"
import { FormPersonalDetails } from "./FormPersonalDetails"
import { FormUserDetail } from "./FormUserDetail"
import { Success } from "./Success"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import DateFnsUtils from '@date-io/date-fns';
// import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import DateTimePicker from '@material-ui/lab/DateTimePicker';

import { DateTimePicker } from "@material-ui/pickers";


import styles from "./TestForm.module.css"

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
}));


// parent componet
// decide what subcomponent to display

export const TestForm = () => {

  const agent = {
    name: "agent1",
    email: "agent@email.com",
    phone: "000-000-0001"
  }

  const service = [
    {
      id: 1,
      name: "WC"
    },
    {
      id: 2,
      name: "NE"
    },
    {
      id: 3,
      name: "EC"
    },
    {
      id: 4,
      name: "SE"
    },
  ]

  const voyage = [
    {
      id: 1,
      voyage: "abc"
    },
    {
      id: 2,
      voyage: "abd"
    },
    {
      id: 3,
      voyage: "abe"
    }
  ]


  const carrier = [
    {
      id: 1,
      name: "carrier1"
    },
    {
      id: 2,
      name: "carrier2"
    },
    {
      id: 3,
      name: "carrier3"
    }
  ]


  const containerType = [
    {
      id: 1,
      equipment_type: "20ST"
    },
    {
      id: 2,
      equipment_type: "20HC"
    },
    {
      id: 3,
      equipment_type: "40ST"
    },
  ]

  const container = [
    {
      id: 1,
      container: "abc123"
    },
    {
      id: 2,
      container: "def456"
    },
    {
      id: 3,
      container: "ghi789"
    },
  ]

  const loadingPort = [
    {
      id: 1,
      name: "philly",
    },
    {
      id: 2,
      name: "nyc",
    },
    {
      id: 3,
      name: "charleston",
    },
  ]

  const unloadingPort = [
    {
      id: 1,
      name: "svi",
    },
    {
      id: 2,
      name: "seoul",
    },
    {
      id: 3,
      name: "naples",
    },
  ]

  const statuses = [
    {
      id: 1,
      status: "pending"
    },
    {
      id: 2,
      status: "complete"
    }
  ]

  const bookingChecks = [
    {
      id: 1,
      isChecked: true,
      label: "documents"
    },
    {
      id: 2,
      isChecked: false,
      label: "dues"

    },
    {
      id: 3,
      isChecked: true,
      label: "issues"
    },
  ]


  const otherData = {
    documents: true,
    money_due: true,
    pickup: "06-25-2020 1200",
    port_cut: "08-28-2020 1200",
    rail_cut: "",
    address: "123 fake street",
    notes: "afadfdafafafd"
  }


  const [productList, setProductList] = useState([])
  const [pickupTime, setPickupTime] = useState(new Date())

  const [formValues, setFormValues] = useState({
    step: 1,
    service: 0,
    voyage: 0,
    carrier: 0,
    equipment_type: 0,
    cntr: 0,
    loading_port: 0,
    unloading_port: 0,
    status: 1,
    documents: false,
    dues: false,
    issues: false,
    pickup: pickupTime,
    port_cut: new Date(),
    rail_cut: new Date(),
    address: "",
    notes: "",
    damaged: false,
    inspection: false,
    overweight: "",
    products: productList
  })

  const classes = useStyles()

  const handlePickupDateChange = (e) => {
    console.log("in handle pick up change")
    console.log(`e.id: ${e.id} e.name: ${e.name} e.label: ${e.label} e.value: ${e.value}`)
    setPickupTime(e)
      .then(() => {
        const name = 'pickup'
        setFormValues({
          ...formValues,
          [name]: pickupTime,
        })
      })

  }

  const handleCheckBoxChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.checked })
  }

  // const handleDateChange = (e) => {
  //   console.log(`e is name: ${e.name} target: ${e.target} id: ${e.id} label: ${e.label}`)
  //   console.log("e target")
  //   console.table(e.target)
  //   console.table(e)
  //   const name = 'pickup'
  //   setFormValues({
  //     ...formValues,
  //     [name]: e,
  //   })
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div style={{ margin: "0 auto", width: "60%", backgroundColor: "red" }}>
      <h1 style={{ margin: "0 auto", backgroundColor: "red", textAlign: "center" }}>New Booking</h1>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} style={{ backgroundColor: '#cfe8fc', border: "black", width: "100%", margin: "0 auto" }}>
        <Grid container spacing={4} style={{ background: "orange", width: "100%", margin: "0 auto " }}>
          <Grid item xs={4} container direction="column">
            <TextField id="name" name="name" label="Agent Name" defaultValue={agent.name} disabled style={{ width: "50%" }} />
            <TextField id="email" name="email" label="Agent Email" defaultValue={agent.email} disabled style={{ width: "50%" }} />
            <TextField id="phone" name="phone" label="Agent Phone" defaultValue={agent.phone} disabled style={{ width: "50%" }} />
          </Grid>
          <Grid item xs={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="serviceSelect">Service</InputLabel>
              <Select
                labelId="serviceSelect"
                id="service"
                name="service"
                value={formValues.service}
                onChange={handleChange}
              >
                {
                  service.map(s => <MenuItem key={s.id} id={s.id} value={s.id}>{s.name}</MenuItem>)
                }

              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="serviceSelect">Voyage</InputLabel>
              <Select
                labelId="voyageSelect"
                id="voyage"
                name="voyage"
                value={formValues.voyage}
                onChange={handleChange}
              >
                {
                  voyage.map(v => <MenuItem key={v.id} id={v.id} value={v.id}>{v.voyage}</MenuItem>)
                }

              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="serviceSelect">Carrier</InputLabel>
              <Select
                labelId="carrierSelect"
                id="carrier"
                name="carrier"
                value={formValues.carrier}
                onChange={handleChange}
              >
                {
                  carrier.map(c => <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>)
                }

              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="cntrTypeSelect">Container Type</InputLabel>
              <Select
                labelId="cntrTypeSelect"
                id="cntrType"
                name="equipment_type"
                value={formValues.equipment_type}
                onChange={handleChange}
              >
                {
                  containerType.map(c => <MenuItem key={c.id} value={c.id}>{c.equipment_type}</MenuItem>)
                }
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="containerSelect">Container</InputLabel>
              <Select
                labelId="containerSelect"
                id="cntr"
                name="cntr"
                value={formValues.cntr}
                onChange={handleChange}
              >
                {
                  container.map(s => <MenuItem key={s.id} value={s.id}>{s.container}</MenuItem>)
                }

              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="loadingPortSelect">Loading Port</InputLabel>
              <Select
                labelId="loadingPortSelect"
                id="loading_port"
                name="loading_port"
                value={formValues.loading_port}
                onChange={handleChange}
              >
                {
                  loadingPort.map(p => <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>)
                }

              </Select>
            </FormControl>


            <FormControl className={classes.formControl}>
              <InputLabel id="unloadingPortSelect">Unloading Port</InputLabel>
              <Select
                labelId="unloadingPortSelect"
                id="unloading_port"
                name="unloading_port"
                value={formValues.unloading_port}
                onChange={handleChange}
              >
                {
                  unloadingPort.map(p => <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>)
                }

              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="statusSelect">Status</InputLabel>
              <Select
                labelId="statusSelect"
                id="status"
                name="status"
                value={formValues.status}
                onChange={handleChange}
              >
                {
                  statuses.map(s => <MenuItem key={s.id} value={s.id}>{s.status}</MenuItem>)
                }

              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Verify About Booking</FormLabel>
              <FormGroup>

                <FormControlLabel
                  id="documents"
                  label="documents"
                  control={<Checkbox checked={formValues.documents} onChange={handleCheckBoxChange} name="documents" />}
                />

                <FormControlLabel
                  id="dues"
                  label="dues"
                  control={<Checkbox checked={formValues.dues} onChange={handleCheckBoxChange} name="dues" />}
                />

                <FormControlLabel
                  id="issues"
                  label="issues"
                  control={<Checkbox checked={formValues.issues} onChange={handleCheckBoxChange} name="issues" />}
                />
              </FormGroup>

              <DateTimePicker
                value={formValues.pickup}
                disablePast
                onChange={handlePickupDateChange}
                label="COWS OF TIME"
                showTodayButton
              />


              <div style={{ background: "orange" }}>selected: {console.table(formValues)}</div>

              <FormHelperText>Be careful form vales pickup : {console.log(formValues.pickup)} </FormHelperText>
            </FormControl>
            <div style={{ background: "orange" }}>selected: {console.table(formValues)}</div>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}


{/* 
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="PickupTime"
                    value={formValues.pickup}
                    onChange={(newValue) => setPickupTime}
                  />
                </LocalizationProvider> */}

// <MuiPickersUtilsProvider utils={DateFnsUtils}>
{/* <DateTimePicker
                        label="DateTimePicker"
                        inputVariant="outlined"
                        value={formValues.pickup}
                        onChange={handleChange}
                      />

                      <DateTimePicker
                        autoOk
                        ampm={false}
                        disableFuture
                        value={formValues.pickup}
                        onChange={handleChange}
                        label="24h clock"
                      />

                      <DateTimePicker
                        value={formValues.pickup}
                        disablePast
                        onChange={handleChange}
                        label="With Today Button"
                        showTodayButton
                      /> */}
{/*         
                      <DateTimePicker
                        value={formValues.pickup}
                        disablePast
                        onChange={handlePickupDateChange}
                        label="Pickup"
                        id="pickup"
                        name="pickup"
                        showTodayButton
                      />

                       <DateTimePicker
                        value={formValues.port_cut}
                        disablePast
                        onChange={handleDateChange}
                        label="Port Cut"
                        id="port_cut"
                        name="port_cut"
                        showTodayButton
                      />

                      <DateTimePicker
                        value={formValues.rail_cut}
                        disablePast
                        onChange={handleDateChange}
                        label="Rail Cut"
                        id="rail_cut"
                        name="rail_cut"
                        showTodayButton
                      />


                    </MuiPickersUtilsProvider> */}
{/* 
                                            <TextField
                          id="moo"
                          label="TEst"
                          type="datetime-local"
                          // defaultValue="2017-05-24T03:30"
                          value={formValues.pickup}
                          onChange={handleDateChange}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        /> */}

{/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="CowPicker"
        value={formValues.pickup}
        onChange={handleDateChange}
      />
    </LocalizationProvider> */}

//  <div className={styles.gridCntr}>
//   <>TestForm</>
      // <Grid container spacing={3} style={{background: "orange"}}>
      //   <Grid item xs={6} container direction="column">
      //     <div style={{background:"lightblue"}}>Div1</div>
      //     <div style={{background:"teal"}}>a</div>
      //     <div style={{background:"gray"}}>b</div>
      //     <div style={{background:"pink"}}>c</div>
      //     <div style={{background:"yellow"}}>d</div>
      //     <div style={{background:"brown"}}>e</div>
      //     <div style={{background:"blue"}}>f</div>
      //   </Grid>
      //   <Grid item xs={6}>
      //     <div style={{background:"lightgreen"}}>Div2</div>

      //     <div style={{background:"orange"}}>g</div>
      //     <div style={{background:"lightgray"}}>h</div>
      //     <div style={{background:"green"}}>i</div>
      //     <div style={{background:"blue"}}>j</div>
      //     <div style={{background:"red"}}>k</div>
      //     <div style={{background:"salomon"}}>l</div>
      //   </Grid>
      // </Grid>
//  </div>

 // <div className={styles.gridCntr}>
 //  <>TestForm</>
 //      <Grid container spacing={3} style={{background: "orange"}} direction="column">
        // <Grid item xs={6}>
        //   <div style={{background:"lightblue"}}>Div1</div>
        // </Grid>
        // <Grid item xs={6}>
        //   <div style={{background:"lightgreen"}}>Div2</div>
        // </Grid>
 //        <Grid item xs={6}>
 //          <div style={{background:"lightgray"}}>Div3</div>
 //        </Grid>
 //        <Grid item xs={6}>
 //          <div style={{background:"pink"}}>Div4</div>
 //        </Grid>
 //        <Grid item xs={6}>
 //          <div style={{background:"teal"}}>Div5</div>
 //        </Grid>
 //      </Grid>
 // </div>

    //  "@date-io/date-fns": "^1.3.13",
    // "@material-ui/data-grid": "^4.0.0-alpha.32",
    // "@material-ui/icons": "^4.11.2",
    // "@material-ui/pickers": "^3.3.10",
    // "date-fns": "^2.0.0-beta.5",
