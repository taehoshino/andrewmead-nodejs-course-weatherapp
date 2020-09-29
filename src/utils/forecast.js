const request = require("request")

const forecast = (lon, lat, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=7b10754d61516d5e5d10c183f1facf74&query=" + lat + "," + lon + "&units=m"
    request({url, json:true}, (error, response, {error:bodyError, current, location})=>{
        if(error){
            callback("Unable to connect to weather service!", undefined)

        }else if(bodyError){
            callback("Unable to find location!", undefined)
        }else {
            callback(undefined, current.weather_descriptions[0] + " at " + location.name + ". It is currently " + current.temperature + " degrees, and it feels like " + current.feelslike + " degrees.\n Current wind speed is " + current.wind_speed + "km/hr. \n UV index is " + current.uv_index + "." 
            )
        }
    })
}

module.exports = forecast