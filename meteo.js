
const apiKey = "f0c40c019cc018269e9beac8a8f36703";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bignay";

// Function which allows me to search for and retreive the info needed//
async function whatIsTheWeather(){
    const answer = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await answer.json();

    // To visualise the info retreived in the console //
    console.log(data);

    // Info that will be returned//
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = "Humidity " + data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind speed " + data.wind.speed + " kl/h";

   
    
// To change icons for differnt types of weather//
const icon = document.querySelector(".icon");

    if(data.weather[0].main == "clouds"){
        icon.src = "images/clouds.png";
    }else if(data.weather[0].main == "clear"){
        icon.src = "images/clear.png";
    }else if(data.weather[0].main == "rain"){
        icon.src = "images/rain.png";
    }else if(data.weather[0].main == "drizzle"){
        icon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "mist"){
        icon.src = "images/mist.png";
    } 
}
function callEveryHour() {
    setInterval(whatIsTheWeather, 1000 * 60 * 60);
}
//To be removed .This is just for coder's view to be sure that all is in good working order//
whatIsTheWeather();

