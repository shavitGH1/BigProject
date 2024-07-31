async function getUV() {
    try {
        // Make the HTTP request to the API
        const response = await fetch('https://currentuvindex.com/api/v1/uvi?latitude=40.6943&longitude=-73.9249');
        
        // Check if the response is OK (status code in the range 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Parse the JSON from the response
        const uvData = await response.json();
        
        // Select the HTML elements where you want to display the data
        const currentUvElement = document.getElementById('current-uv');
        const uvForecastElement = document.getElementById('uv-forecast');
        
        // Display the current UV index
        currentUvElement.textContent = `${uvData.now.uvi}`;
        
        // Clear any previous forecast entries
        uvForecastElement.innerHTML = '';

        // Get the first 3 forecast entries
        const numberOfEntriesToShow = 3;
        const forecastEntries = uvData.forecast.slice(0, numberOfEntriesToShow);

        // Add the forecast entries to the page
        forecastEntries.forEach(entry => {
            const listItem = document.createElement('li');
            listItem.textContent = `Time: ${entry.time}, UV Index: ${entry.uvi}`;
            uvForecastElement.appendChild(listItem);
        });
        
    } catch (error) {
        // Handle errors, such as network issues or JSON parsing errors
        console.error('Error fetching UV index:', error);
        
        // Display an error message on the page
        const currentUvElement = document.getElementById('current-uv');
        currentUvElement.textContent = 'Error fetching UV data';

        const uvForecastElement = document.getElementById('uv-forecast');
        uvForecastElement.innerHTML = '<li>Error fetching forecast data</li>';
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    getUV(); 
})