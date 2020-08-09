export const getWeather = (city, state) => {
   return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${state}&key=${PUT_YOUR_API_KEY_HERE}&units=I`)
    .then(response => {
        if (!response) return null
        else return response.json()
    })
}