import React from 'react';
import { useDispatch } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import WeatherContainer from './weatherContainer'
import { fetchWeather } from '../actions/fetchWeather';
import { addFormValues } from '../actions/formValues'


const Input = () => {

  const dispatch = useDispatch();

  const initialState = {
    goDate: new Date(),
    backDate: new Date(),
    city: [],
    state: []
  };

  const [formData, setFormData] = React.useState(initialState);

  const handleChange = (type, input) => setFormData({ ...formData, [type]: input })

  const onSubmit = (goDate, backDate, city, state) => {
    dispatch(addFormValues(goDate, backDate))
    dispatch(fetchWeather(city, state))
  }

  return (
    <div >
      <Grid container spacing={1}>
        <Grid item md={3}></Grid>
        <Grid item md={6}>
          <WeatherContainer />
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item md={4}></Grid>
        <Grid item xs={6} md={2}>
          <TextField
            id="outlined-basic"
            label="City"
            onChange={e => handleChange('city', e.target.value)}
            value={formData.city}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={formData.state}
            onChange={e => handleChange('state', e.target.value)}
            label="State"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="AL">Alabama</MenuItem>
            <MenuItem value="AK">Alaska</MenuItem>
            <MenuItem value="AS">American Samoa</MenuItem>
            <MenuItem value="AZ">Arizona</MenuItem>
            <MenuItem value="AR">Arkansas</MenuItem>
            <MenuItem value="CA">California</MenuItem>
            <MenuItem value="CO">Colorado</MenuItem>
            <MenuItem value="CT">Connecticut</MenuItem>
            <MenuItem value="DE">Delaware</MenuItem>
            <MenuItem value="DC">District Of Columbia</MenuItem>
            <MenuItem value="FL">Florida</MenuItem>
            <MenuItem value="GA">Georgia</MenuItem>
            <MenuItem value="GU">Guam</MenuItem>
            <MenuItem value="HI">Hawaii</MenuItem>
            <MenuItem value="ID">Idaho</MenuItem>
            <MenuItem value="IL">Illinois</MenuItem>
            <MenuItem value="IN">Indiana</MenuItem>
            <MenuItem value="IA">Iowa</MenuItem>
            <MenuItem value="KS">Kansas</MenuItem>
            <MenuItem value="KY">Kentucky</MenuItem>
            <MenuItem value="LA">Louisiana</MenuItem>
            <MenuItem value="ME">Maine</MenuItem>
            <MenuItem value="MD">Maryland</MenuItem>
            <MenuItem value="MA">Massachusetts</MenuItem>
            <MenuItem value="MI">Michigan</MenuItem>
            <MenuItem value="MN">Minnesota</MenuItem>
            <MenuItem value="MS">Mississippi</MenuItem>
            <MenuItem value="MO">Missouri</MenuItem>
            <MenuItem value="MT">Montana</MenuItem>
            <MenuItem value="NE">Nebraska</MenuItem>
            <MenuItem value="NV">Nevada</MenuItem>
            <MenuItem value="NH">New Hampshire</MenuItem>
            <MenuItem value="NJ">New Jersey</MenuItem>
            <MenuItem value="NM">New Mexico</MenuItem>
            <MenuItem value="NY">New York</MenuItem>
            <MenuItem value="NC">North Carolina</MenuItem>
            <MenuItem value="ND">North Dakota</MenuItem>
            <MenuItem value="MP">Northern Mariana Islands</MenuItem>
            <MenuItem value="OH">Ohio</MenuItem>
            <MenuItem value="OK">Oklahoma</MenuItem>
            <MenuItem value="OR">Oregon</MenuItem>
            <MenuItem value="PA">Pennsylvania</MenuItem>
            <MenuItem value="PR">Puerto Rico</MenuItem>
            <MenuItem value="RI">Rhode Island</MenuItem>
            <MenuItem value="SC">South Carolina</MenuItem>
            <MenuItem value="SD">South Dakota</MenuItem>
            <MenuItem value="TN">Tennessee</MenuItem>
            <MenuItem value="TX">Texas</MenuItem>
            <MenuItem value="UM">United States Minor Outlying Islands</MenuItem>
            <MenuItem value="UT">Utah</MenuItem>
            <MenuItem value="VT">Vermont</MenuItem>
            <MenuItem value="VI">Virgin Islands</MenuItem>
            <MenuItem value="VA">Virginia</MenuItem>
            <MenuItem value="WA">Washington</MenuItem>
            <MenuItem value="WV">West Virginia</MenuItem>
            <MenuItem value="WI">Wisconsin</MenuItem>
            <MenuItem value="WY">Wyoming</MenuItem>
          </Select>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={1} >
          <Grid item md={4}></Grid>
          <Grid item xs={6} md={2}>
            <KeyboardDatePicker
              variant="outlined"
              margin="normal"
              id="date-picker-dialog"
              label="Depart"
              format="MMM do"
              onChange={date => handleChange('goDate', date)}
              inputVariant="outlined"
              KeyboardButtonProps={{ 'aria-label': 'change date' }}
              name="goDate"
              value={formData.goDate}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <KeyboardDatePicker
              variant="outlined"
              margin="normal"
              id="date-picker-dialog"
              label="Return"
              format="MMM do"
              onChange={date => handleChange('backDate', date)}
              inputVariant="outlined"
              KeyboardButtonProps={{ 'aria-label': 'change date' }}
              name="backDate"
              value={formData.backDate}
            />
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </MuiPickersUtilsProvider>
      <Grid container spacing={1}>
        <Grid item md={4}></Grid>
        <Grid item xs={4}>
          <Button
            className="input"
            variant="contained"
            color="secondary"
            onClick={() => onSubmit(formData.goDate, formData.backDate, formData.city, formData.state)}
          >
            SEARCH
      </Button>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </div>
  );
}

export default Input