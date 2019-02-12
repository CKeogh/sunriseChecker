function getSunriseData(weatherData) {

    // const currentTime = weatherData.time.match(/T(.+)\./)[1];
    // const sunrise = weatherData.sun_rise.match(/T(.+)\./)[1];
    // const weather = weatherData.consolidated_weather;
    // let currentDay = 0;
    // let sunriseDay = 'today';

    // if (+currentTime.slice(0,2) > +sunrise.slice(0,2)) {
    //     currentDay = 1;
    //     sunriseDay = 'tomorrow'
    // } else if (+currentTime.slice(0,2) === +sunrise.slice(0,2) && +currentTime.slice(3,5) >= +sunrise.slice(3,5)) {
    //     currentDay = 1;
    //     sunriseDay = 'tomorrow';
    // }

    // const weatherState = weather[currentDay].weather_state_name;
    // const sunriseIsGood = weatherState === "Clear" || weatherState === 'Light Cloud';
    // let output = {nextSunriseTime: sunrise, nextSunriseDay: sunriseDay, isGood: sunriseIsGood };

    // return output;
}

function getSunsetData(weatherData) {

    const currentTime = weatherData.time.match(/T(.+)\./)[1];
    const sunset = weatherData.sun_set.match(/T(.+)\./)[1];
    const weather = weatherData.consolidated_weather;
    let currentDay = 0;
    let sunsetDay = 'today';

    if (+currentTime.slice(0,2) > +sunset.slice(0,2)) {
        currentDay = 1;
        sunsetDay = 'tomorrow'
    } else if (+currentTime.slice(0,2) === +sunset.slice(0,2) && +currentTime.slice(3,5) >= +sunset.slice(3,5)) {
        currentDay = 1;
        sunsetDay = 'tomorrow';
    }

    const weatherState = weather[currentDay].weather_state_name;
    const sunsetIsGood = weatherState === "Clear" || weatherState === 'Light Cloud';

    let output = {nextSunsetTime: sunset, nextSunsetDay: sunsetDay, isGood: sunsetIsGood };

    return output;
}

function fetchNextSunsetData(sunsetTime, weatherData) {
    const time = new Date();
    const hoursNow = time.getHours();
    const minutesNow = time.getMinutes();
    const hoursSunset = +sunsetTime.slice(0, 2);
    const minutesSunset = +sunsetTime.slice(-2);

    weatherData.list.reduce((forecast, hourCast) => {
        // filter the next sunset from the list
    }, {});


}


module.exports = { getSunriseData, getSunsetData, fetchNextSunsetData };