# get-weather-app

This is a simple weather app that allows users to search for the current weather conditions of a city, state or country.

## Features

- Users can search for a city, state or country by name.
- The app displays the current temperature, weather description, and an icon representing the weather conditions.
- Additional weather details are displayed, including:
    - Feels like temperature
    - Minimum and maximum temperatures
    - Humidity
    - Pressure
    - Wind speed and direction
    - Cloudiness
    - Visibility
    - Sunrise and sunset times
    - Geographic coordinates

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript) templating engine
- OpenWeatherMap API

## Installation

1. Clone the repository: `git clone https://github.com/your-username/get-weather-app.git`
2. Navigate to the project directory: `cd get-weather-app`
3. Install dependencies: `npm install`
4. Obtain an API key from OpenWeatherMap: [https://openweathermap.org/api](https://openweathermap.org/api)
5. Create a `.env` file in the root directory and add your API key:


## Usage

1. Start the server: `npm start`
2. Open your web browser and go to `http://localhost:3000`.
3. Enter a city, state or country name in the search bar and click the search button.