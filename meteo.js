
const apiKey = "f0c40c019cc018269e9beac8a8f36703";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=saintes";

async function whatIsTheWeather(){
    const answer = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await answer.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity " + data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kl/h";

    const icon = document.querySelector(".icon");

    if(data.whatIsTheWeather[0].main == "clouds"){
        icon.src = "images/clouds.png";
    }else if(data.whatIsTheWeather[0].main == "clear"){
        icon.src = "images/clear.png";
    }else if(data.whatIsTheWeather[0].main == "rain"){
        icon.src = "images/rain.png";
    }else if(data.whatIsTheWeather[0].main == "drizzle"){
        icon.src = "images/drizzle.png";
    }else if(data.whatIsTheWeather[0].main == "mist"){
        icon.src = "images/mist.png";
    } 
}
//This is for coder's view to be sure that all is in good working order//
whatIsTheWeather();

