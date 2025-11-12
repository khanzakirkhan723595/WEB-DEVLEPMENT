document.addEventListener("DOMContentLoaded",()=>{
    // Step 1: Select HTML elements
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const description = document.getElementById('description');
    const weatherInfo = document.getElementById('weather-info');
    const errorMessage = document.getElementById('error-message');

    //Function to Fetch Weather from the API

    // Step 1: Define the API Key
    const apiKey = "26db0a70170f8a273ab8d5f2dc84495d";
    
    function getWeather(city){
        //Step 2: Build the API URL Dynamically
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        //Step 3: Fetch Data from the API
        fetch(url)  //Makes a network request to the OpenWeather API.
            .then(response =>{ //This runs after the response is received.
                //console.log("raw response:",response)

                //Step 4: Check if response is OK
                if(!response.ok){
                    throw new Error("City not found"); //custom error
                }

                //Step 5: Convert to JSON
                return response.json();  //// parses JSON body
            })
            .then(data=>{
                //console.log("Weather Data JSON:",data); //check output

                //UPDATE UI
                cityName.textContent=data.name;
                temperature.textContent=`🌡️ ${data.main.temp} °C`;
                description.textContent=`📖 ${data.weather[0].description}`;
                humidity.textContent=`Humidity: ${data.main.humidity}`;

                //show wheather section , hide error
                weatherInfo.classList.remove("hidden");
                errorMessage.classList.add("hidden");
            })
            .catch(error => {
                console.error("❌ Error:", error.message);

                //Hide weather , show error
                weatherInfo.classList.add("hidden");
                errorMessage.classList.remove("hidden");
            });
    }

    //Step 6: Add Event Listener to the Button
    getWeatherBtn.addEventListener("click",()=>{
        const city =cityInput.value.trim();
        if(city!="")
        {
            getWeather(city);
        }
    })

})
    
