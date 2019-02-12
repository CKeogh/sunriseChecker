#!/home/chris/.nvm/versions/node/v11.5.0/bin/node

const https = require('https');
const fs = require('fs');
const {
fetchNextSunsetData,
goodSunset } = require('./functions.js');

// fs.readFile('./city.list.json','utf8', (err, data) => {
//     const cities = JSON.parse(data);
//     console.log(cities.filter(city => city.name === "Liverpool" && city.country === 'GB'));
// })

const options = {
    hostname: "www.metaweather.com",
    path: "/api/location/26734/",
    method: "GET"
}

const apiKey = '29a6fa3d041a4d4365d30ba4adfbdf5c';
const Liverpool = 2644210;

const openWeather = {
    hostname: "api.openweathermap.org",
    path: `/data/2.5/forecast?id=${Liverpool}&APPID=${apiKey}`
}

const req = https.request(openWeather, (res) => {
    let body = "";
    res.on("data", (incomingData) => {
        body += incomingData.toString();
    });
    res.on("end", () => {

        const data = JSON.parse(body);
        const sunset = '16:50';
        nextSunsetData = fetchNextSunsetData(sunset, data);
        console.log(nextSunsetData);
        console.log(goodSunset(nextSunsetData));

    });
});

req.on("error", (e) => {
    console.log(e);
})

req.end();


// ### SAMPLE WEATHER DATA FOR WORKING OFFLINE ##

// fs.readFile('./weatherData.json', 'utf8', (err, body) => {
//     if (err) console.log(err)
//     else {

//         const data = JSON.parse(body);
//         const sunset = '16:50';
//         nextSunsetData = fetchNextSunsetData(sunset, data);
//         console.log(goodSunset(nextSunsetData));

//     }
// })
