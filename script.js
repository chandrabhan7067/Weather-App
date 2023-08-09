// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: 'GET',
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    cityname.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees

        })
        .catch(err => console.error(err));
}



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        Batemp.innerHTML = response.temp
        Bacloud_pct.innerHTML = response.cloud_pct
        Bafeels_like.innerHTML = response.feels_like
        Bahumidity.innerHTML = response.humidity
        Bamin_temp.innerHTML = response.min_temp
        Bamax_temp.innerHTML = response.max_temp
        Bawind_speed.innerHTML = response.wind_speed
        Bawind_degrees.innerHTML = response.wind_degrees

    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhopal', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        Bhtemp.innerHTML = response.temp
        Bhcloud_pct.innerHTML = response.cloud_pct
        Bhfeels_like.innerHTML = response.feels_like
        Bhhumidity.innerHTML = response.humidity
        Bhmin_temp.innerHTML = response.min_temp
        Bhmax_temp.innerHTML = response.max_temp
        Bhwind_speed.innerHTML = response.wind_speed
        Bhwind_degrees.innerHTML = response.wind_degrees

    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        Kotemp.innerHTML = response.temp
        Kocloud_pct.innerHTML = response.cloud_pct
        Kofeels_like.innerHTML = response.feels_like
        Kohumidity.innerHTML = response.humidity
        Komin_temp.innerHTML = response.min_temp
        Komax_temp.innerHTML = response.max_temp
        Kowind_speed.innerHTML = response.wind_speed
        Kowind_degrees.innerHTML = response.wind_degrees
    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)

        Putemp.innerHTML = response.temp
        Pucloud_pct.innerHTML = response.cloud_pct
        Pufeels_like.innerHTML = response.feels_like
        Puhumidity.innerHTML = response.humidity
        Pumin_temp.innerHTML = response.min_temp
        Pumax_temp.innerHTML = response.max_temp
        Puwind_speed.innerHTML = response.wind_speed
        Puwind_degrees.innerHTML = response.wind_degrees
    })
    .catch(err => console.error(err));


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

function guide(){
    alert("If you want to see weather report of any city then simply typ on the search bar which is in the top right corner and then click on search button or press enter then you can see the result")
}

getWeather("Delhi")