const apiKey = "ea32334cc56b4b320e1c6fbc889f92f4"; // Replace with your OpenWeatherMap API key

document.getElementById("getWeather").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found!");
            }
            return response.json();
        })
        .then(data => {
            const weatherDetails = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weatherResult").innerHTML = weatherDetails;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
        });
});
