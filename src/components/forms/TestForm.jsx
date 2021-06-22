import { Grid } from "@material-ui/core"
import React, { useState } from "react"

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import { DateTimePicker } from "@material-ui/pickers";


import styles from "./TestForm.module.css"

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
    bkg_notes: "afadfdafafafd"
  }


  const [productList, setProductList] = useState([])
  const [pickupTime, setPickupTime] = useState(new Date())
  const [portCutTime, setPortCutTime] = useState(new Date())
  const [railCutTime, setRailCutTime] = useState(new Date())


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
    port_cut: portCutTime,
    rail_cut: railCutTime,
    address: "",
    bkg_notes: "",
    cntr_notes: "",
    damaged: false,
    inspection: false,
    overweight: false,
    commodity: "",
    weight: 0,
    fragile: false,
    hazardous: false,
    reefer: false,
    productDamaged: false
  })

  const classes = useStyles()

  const handlePickupDateChange = (e) => {
    console.log("in handle pick up change")
    console.log(`e.id: ${e.id} e.name: ${e.name} e.label: ${e.label} e.value: ${e.value}`)
    setPickupTime(prevState => e)

    const name = 'pickup'
    setFormValues({
      ...formValues,
      [name]: pickupTime,
    })
    console.log(`pickupTime is ${pickupTime}`)
    console.log(`formValues.pickup is ${formValues.pickup}`)
  }

  const handlePortCutDateChange = (e) => {
    console.log("in handle port cut change")
    console.log(`e.id: ${e.id} e.name: ${e.name} e.label: ${e.label} e.value: ${e.value}`)
    setPortCutTime(prevState => e)

    const name = 'port_cut'
    setFormValues({
      ...formValues,
      [name]: portCutTime,
    })
    console.log(`portCutTime is ${portCutTime}`)
    console.log(`formValues.port_cut is ${formValues.port_cut}`)
  }

  const handleRailCutDateChange = (e) => {
    console.log("in handle rail cut change")
    console.log(`e.id: ${e.id} e.name: ${e.name} e.label: ${e.label} e.value: ${e.value}`)
    setRailCutTime(e)

    const name = 'rail_cut'
    setFormValues({
      ...formValues,
      [name]: railCutTime,
    })
    console.log(`railCutTime is ${railCutTime}`)
    console.log(`formValues.rail_cut is ${formValues.rail_cut}`)
  }


  const handleCheckBoxChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.checked })
  }

  const handleInputChange = (e) => {
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
            <FormControl className={classes.formControl} style={{ width: "60%" }}>
              <InputLabel id="serviceSelect">Service</InputLabel>
              <Select
                labelId="serviceSelect"
                id="service"
                name="service"
                value={formValues.service}
                onChange={handleInputChange}
              >
                {
                  service.map(s => <MenuItem key={s.id} id={s.id} value={s.id}>{s.name}</MenuItem>)
                }

              </Select>
            </FormControl>

            <FormControl className={classes.formControl} style={{ width: "60%" }}>
              <InputLabel id="voyageSelect">Voyage</InputLabel>
              <Select
                labelId="voyageSelect"
                id="voyage"
                name="voyage"
                value={formValues.voyage}
                onChange={handleInputChange}
              >
                {
                  voyage.map(v => <MenuItem key={v.id} id={v.id} value={v.id}>{v.voyage}</MenuItem>)
                }

              </Select>
            </FormControl>

            <FormControl className={classes.formControl} style={{ width: "60%" }}>
              <InputLabel id="carrierSelect">Carrier</InputLabel>
              <Select
                labelId="carrierSelect"
                id="carrier"
                name="carrier"
                value={formValues.carrier}
                onChange={handleInputChange}
              >
                {
                  carrier.map(c => <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>)
                }

              </Select>
            </FormControl>

            <FormControl className={classes.formControl} style={{ width: "60%" }}>
              <InputLabel id="cntrTypeSelect">Container Type</InputLabel>
              <Select
                labelId="cntrTypeSelect"
                id="cntrType"
                name="equipment_type"
                value={formValues.equipment_type}
                onChange={handleInputChange}
              >
                {
                  containerType.map(c => <MenuItem key={c.id} value={c.id}>{c.equipment_type}</MenuItem>)
                }
              </Select>
            </FormControl>

            <FormControl className={classes.formControl} style={{ width: "60%" }}>
              <InputLabel id="containerSelect">Container</InputLabel>
              <Select
                labelId="containerSelect"
                id="cntr"
                name="cntr"
                value={formValues.cntr}
                onChange={handleInputChange}
              >
                {
                  container.map(s => <MenuItem key={s.id} value={s.id}>{s.container}</MenuItem>)
                }

              </Select>
            </FormControl>

            <FormControl className={classes.formControl} style={{ width: "60%" }}>
              <InputLabel id="loadingPortSelect" >Loading Port</InputLabel>
              <Select
                labelId="loadingPortSelect"
                id="loading_port"
                name="loading_port"
                value={formValues.loading_port}
                onChange={handleInputChange}
              >
                {
                  loadingPort.map(p => <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>)
                }

              </Select>
            </FormControl>


            <FormControl className={classes.formControl} style={{ width: "60%" }}>
              <InputLabel id="unloadingPortSelect">Unloading Port</InputLabel>
              <Select
                labelId="unloadingPortSelect"
                id="unloading_port"
                name="unloading_port"
                value={formValues.unloading_port}
                onChange={handleInputChange}
              >
                {
                  unloadingPort.map(p => <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>)
                }

              </Select>
            </FormControl>

            <FormControl className={classes.formControl} style={{ width: "60%" }}>
              <InputLabel id="statusSelect">Status</InputLabel>
              <Select
                labelId="statusSelect"
                id="status"
                name="status"
                value={formValues.status}
                onChange={handleInputChange}
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


              <FormHelperText>Be careful form vales pickup : {console.log(formValues.pickup)} </FormHelperText>
            </FormControl>
            <DateTimePicker
              style={{ width: '100%' }}
              value={formValues.pickup}
              disablePast
              onChange={handlePickupDateChange}
              label="Pick Up"
              showTodayButton
            />

            <DateTimePicker
              style={{ width: '100%' }}
              value={formValues.port_cut}
              disablePast
              onChange={handlePortCutDateChange}
              label="Port Cut"
              showTodayButton
            />

            <DateTimePicker
              style={{ width: '100%' }}
              value={formValues.rail_cut}
              disablePast
              onChange={handleRailCutDateChange}
              label="Rail Cut"
              showTodayButton
            />
            <TextField
              id="address"
              name="address"
              label="Pickup Address"
              defaultValue={formValues.address}
              style={{ width: "100%" }}
              onChange={handleInputChange}
            />
            <TextareaAutosize
              id="bkg_notes"
              name="bkg_notes"
              aria-label="empty textarea"
              placeholder="Booking Notes"
              value={formValues.bkg_notes}
              style={{ width: "100%" }}
              rowsMin={5}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </form>
    </div >
  )
}
