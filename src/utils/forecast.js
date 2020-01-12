const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/365e4303396e9b9dec246c6119c74079/' + latitude + ',' + longitude

    request({  url, json: true }, (error,  {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if ( body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,  body.daily.data[0].summary + ' It is currently ' +  body.currently.temperature + ' degress out. There is a ' +  body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast