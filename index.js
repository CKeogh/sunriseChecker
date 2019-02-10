#!/home/chris/.nvm/versions/node/v11.5.0/bin/node


const https = require('https');
const fs = require('fs');
const { getSunriseData, getSunsetData } = require('./functions.js')

const options = {
    hostname: "www.metaweather.com",
    path: "/api/location/26734/",
    method: "GET"
}

const req = https.request(options, (res) => {
    let body = "";
    res.on("data", (incomingData) => {
        body += incomingData.toString();
    });
    res.on("end", () => {

            const data = JSON.parse(body);
            const sunriseData = getSunriseData(data);
            const sunsetData = getSunsetData(data);
    
            if (sunriseData.isGood) {
                console.log(`the next sunrise will be ${sunriseData.nextSunriseDay} at ${sunriseData.nextSunriseTime} and it's going to be a good one! `)
            }
            if (sunsetData.isGood) {
                console.log(`the next sunset will be ${sunsetData.nextSunsetDay} at ${sunsetData.nextSunsetTime} and it's going to be a good one!`)
            }
            if (!sunsetData.isGood && !sunriseData.isGood) {
                console.log(`I'm afraid there won't be much to see today but be sure to check back later`)
            }
    });
});

req.on("error", (e) => {
    console.log(e);
})

req.end();

// fs.readFile('./weatherData.json', 'utf8', (err, body) => {
//     if (err) console.log(err)
//     else {
//         const data = JSON.parse(body);
//         const sunriseData = getSunriseData(data)

//         if (sunriseData.isGood) {
//             console.log(`the next sunrise will be ${nextSunriseDay} at ${sunriseData.nextSunriseTime} and it's going to be a good one! `)
//         } else {
//             console.log(`I'm afraid there won't be much to see this morning but be sure to check back later`)
//         }
//     }
// })
