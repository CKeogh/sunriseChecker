#!/home/chris/.nvm/versions/node/v11.5.0/bin/node

const https = require('https');
const fs = require('fs');
const { getSunriseData, getSunsetData } = require('./functions.js');

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

// const req = https.request(openWeather, (res) => {
//     let body = "";
//     res.on("data", (incomingData) => {
//         body += incomingData.toString();
//     });
//     res.on("end", () => {


//         const data = JSON.parse(body);
//         const sunriseWeather = data.list.filter(report => /06:00:00/.test(report.dt_txt));
//         const sunriseWeather = data.list[1].dt_txt;
//         console.log(sunriseWeather);
//         const sunriseData = getSunriseData(data);
//         const sunsetData = getSunsetData(data);

//         if (sunriseData.isGood) {
//             console.log(`the next sunrise will be ${sunriseData.nextSunriseDay} at ${sunriseData.nextSunriseTime} and it's going to be a good one! `)
//         }
//         if (sunsetData.isGood) {
//             console.log(`the next sunset will be ${sunsetData.nextSunsetDay} at ${sunsetData.nextSunsetTime} and it's going to be a good one!`)
//         }
//         if (!sunsetData.isGood && !sunriseData.isGood) {
//             console.log(`I'm afraid there won't be much to see ${sunriseData.nextSunriseDay} but be sure to check back later`)
//         }
//     });
// });

// req.on("error", (e) => {
//     console.log(e);
// })

// req.end();


// ### SAMPLE WEATHER DATA FOR WORKING OFFLINE ##

fs.readFile('./weatherData.json', 'utf8', (err, body) => {
    if (err) console.log(err)
    else {
        const data = JSON.parse(body);
        console.log(data)
        getSunriseData();
        // const sunriseData = getSunriseData(data)

        // if (sunriseData.isGood) {
        //     console.log(`the next sunrise will be ${nextSunriseDay} at ${sunriseData.nextSunriseTime} and it's going to be a good one! `)
        // } else {
        //     console.log(`I'm afraid there won't be much to see this morning but be sure to check back later`)
        // }
    }
})
