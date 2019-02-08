const https = require('https');

const options = {
    hostname: "data.police.uk",
    path: "api/crimes-at-location?date=2017-02&location_id=884227",
    method: "GET"
}

const req = https.request(options, (res) => {
    let body = "";
    res.on("data", (incomingData) => {
        body += incomingData.toString();
    });
    res.on("end", () => {
        console.log(body);
    });
});

req.on("error", (e) => {
    console.log(e);
})

req.end();