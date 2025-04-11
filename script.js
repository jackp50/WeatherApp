//do this when the form is submitted
document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 

    const location = document.getElementById('location').value;
    const apiKey = '9VMEVPSJB3XANZFZBMEEDJNNH';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${apiKey}&contentType=json`;

    try {
        //fetch the url
        const response = await fetch(url, { mode: 'cors' });
        const weatherData = await response.json();

       //the info I care to display
        const city = weatherData.address;
        const temp = weatherData.currentConditions.temp;
        const description = weatherData.currentConditions.conditions;

        // Display the info
        document.getElementById('weatherDisplay').innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${temp}°F</p>
            <p>Condition: ${description}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});