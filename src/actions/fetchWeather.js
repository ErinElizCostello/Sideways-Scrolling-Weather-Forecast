import { getWeather } from '../API';
import { fetchWeatherPending, fetchWeatherSuccess, fetchWeatherError } from './fetching.js';
import store from '../store'


export const fetchWeather = (city, state) => dispatch => {

  dispatch(fetchWeatherPending());

  getWeather(city, state).then(weather => {
    if (weather.error) {
      throw (weather.error);
    }

    const state = store.getState()
    const { goDate, backDate } = state.formValues
    const forecasts = []

    weather.data.filter(el => new Date(el.valid_date).getTime() >= new Date(goDate).getTime() && new Date(el.valid_date).getTime() <= new Date(backDate).getTime()).map(e => {
      const eachDay = {
        date: e.valid_date,
        icon: e.weather.icon,
        highTemp: Math.round(e.high_temp),
        lowTemp: Math.round(e.low_temp)
      }

      forecasts.push(eachDay)
    })

    dispatch(fetchWeatherSuccess(forecasts))

  }).catch(error => {
    dispatch(fetchWeatherError(error));
  })
}




// import { getWeather } from '../API';
// import store from '../store'

// export const fetchWeather = (city, state) => dispatch => {
//   return getWeather(city, state).then(weather => {  

//     const state = store.getState()
//     const { goDate, backDate } = state.formValues

//     const forecast = weather.data.filter(el => new Date(el.valid_date).getTime() >= new Date(goDate).getTime() && new Date(el.valid_date).getTime() <= new Date(backDate).getTime())

//     dispatch({
//       type: 'SET_WEATHER',
//       data: forecast

//     })
//   })
// }