const https = require('https');
const fs = require('fs');
const {getSunriseData} = require('./functions.js')

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
            const sunriseData = getSunriseData(data)
    
            if (sunriseData.isGood) {
                console.log(`the next sunrise will be ${nextSunriseDay} at ${sunriseData.nextSunriseTime} and it's going to be a good one! `)
            } else {
                console.log(`I'm afraid there won't be much to see this morning but be sure to check back later`)
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
