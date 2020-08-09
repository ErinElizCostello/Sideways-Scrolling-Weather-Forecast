export const FETCH_WEATHER_PENDING = 'FETCH_POKEMON_PENDING';
export const FETCH_WEATHER_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_WEATHER_ERROR = 'FETCH_POKEMON_ERROR';


export const fetchWeatherPending = () => {
    return {
        type: FETCH_WEATHER_PENDING
    }
}

export const fetchWeatherSuccess = forecast => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        data: forecast
    }
}

export const fetchWeatherError = error => {
    return {
        type: FETCH_WEATHER_ERROR,
        error
    }
}