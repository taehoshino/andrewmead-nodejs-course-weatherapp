const request = require("request")
const {forecastKey} = require("./config")

const forecast = (lon, lat, callback) => {
    const url = "http://api.weatherstack.com/current?access_key="+forecastKey+"&query=" + lat + "," + lon + "&units=m"
    request({url, json:true}, (error, response, {error:bodyError, current, location})=>{
        if(error){
            callback("Unable to connect to weather service!", undefined)

        }else if(bodyError){
            callback("Unable to find location!", undefined)
        }else {
            callback(undefined, 
                current.weather_descriptions[0] + " at " + location.name + ". It is currently " + current.temperature + " degrees, and it feels like " + 
                current.feelslike + " degrees.\n Current wind speed is " + current.wind_speed + "km/hr. \n UV index is " + current.uv_index + "." 
            )
        }
    })
}

module.exports = forecast