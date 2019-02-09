const https = require('https');
const {isGoodSunrise} = require('./functions.js')

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
        const sunset = data.sun_set.match(/T(.+)\./);
        const sunrise = data.sun_rise.match(/T(.+)\./);
        const weather = data.consolidated_weather;
        console.log(`The sun will set tonight at ${sunset[1]}`)
        console.log(`The sun will rise tomorrow at ${sunrise[1]}`)
    });
});

req.on("error", (e) => {
    console.log(e);
})

req.end();