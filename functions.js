
function fetchNextSunsetData(sunsetTime, weatherData) {
    
    const time = new Date();
    const hoursNow = time.getHours();
    const minutesNow = time.getMinutes();
    const hoursSunset = +sunsetTime.slice(0, 2);
    const minutesSunset = +sunsetTime.slice(-2);
    let sunsetDay = 0;

    if (hoursNow > hoursSunset) sunsetDay = 1;
    else if (hoursNow === hoursSunset && minutesNow > minutesSunset) sunsetDay = 1;

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

}

function goodConditions(weatherData) {
    return weatherData.clouds.all < 50;
}




module.exports = { fetchNextSunsetData, fetchNextSunriseData, goodConditions };