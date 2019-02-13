
function fetchNextSunsetData(sunsetTime, weatherData) {
    
    let nextSunset = {};
    for (let i = 0; i < weatherData.list.length; i++) {
        let date = weatherData.list[i].dt_txt
        if (/18:00:00/.test(date)) {
            nextSunset = weatherData.list[i]
            break;
        }
    }
    return nextSunset;
}

function fetchNextSunriseData(sunriseTime, weatherData) {

    let nextSunrise = {};
    for (let i = 0; i < weatherData.list.length; i++) {
        let date = weatherData.list[i].dt_txt
        if (/09:00:00/.test(date)) {
            nextSunrise = weatherData.list[i]
            break;
        }
    }
    return nextSunrise;
}

function goodConditions(weatherData) {
    return weatherData.clouds.all < 50;
}




module.exports = { fetchNextSunsetData, fetchNextSunriseData, goodConditions };