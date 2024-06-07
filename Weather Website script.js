async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
