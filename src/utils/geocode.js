const request = require("request")


const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoidGFlaG9zaGlubyIsImEiOiJja2VzNnc4bWUwMnB3MnNvMDdmdHVzMzVjIn0.pr-Yr3A3yk3tuoz0ONvZjA&limit=1"
    request({url, json:true}, (error, response, {features})=>{
        if (error){
            callback("Unable to connect to geocoding service!", undefined)
        } else if (features.length===0){
            callback("Unable to find location!", undefined)
        } else{
            callback(undefined, {
                longitude: features[0].center[0],
                latitude: features[0].center[1],
                location: features[0].place_name
            })
        }
    })
}

module.exports = geocode