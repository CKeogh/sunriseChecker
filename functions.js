function getSunriseData(weatherData) {

    const currentTime = weatherData.time.match(/T(.+)\./)[1];
    const sunset = weatherData.sun_set.match(/T(.+)\./)[1];
    const sunrise = weatherData.sun_rise.match(/T(.+)\./)[1];
    const weather = weatherData.consolidated_weather;
    let currentDay = 0;
    let sunriseDay = 'today';

    if (+currentTime.slice(0,2) > +sunrise.slice(0,2)) {
        currentDay = 1;
        sunriseDay = 'tomorrow'
    } else if (+currentTime.slice(0,2) === +sunrise.slice(0,2) && +currentTime.slice(3,5) >= +sunrise.slice(3,5)) {
        currentDay = 1;
        sunriseDay = 'tomorrow';
    }

    const weatherState = weather[currentDay].weather_state_name;
    const sunriseIsGood = weatherState === "Clear" || weatherState === 'Light Cloud';

    let output = {nextSunriseTime: sunrise, nextSunriseDay: sunriseDay, isGood: sunriseIsGood };

    return output;
}


module.exports = {getSunriseData};