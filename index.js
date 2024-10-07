// index.js
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables
dotenv.config();

const app = express();

// Middleware to serve static files
app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.css')) {
            res.set('Content-Type', 'text/css');
        }
    }
}));

// Set the views directory and view engine
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Route to render the home page
app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null });
});

// Route to fetch weather data from API
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod != 200) {
            res.render('index', { weather: null, error: 'City not found!' });
        } else {
            const weather = {
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                feels_like: data.main.feels_like,
                min_temp: data.main.temp_min,
                max_temp: data.main.temp_max,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                windSpeed: data.wind.speed,
                windDeg: data.wind.deg,
                clouds: data.clouds.all,
                visibility: data.visibility,
                sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
                sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
                lat: data.coord.lat,
                lon: data.coord.lon
            };            
            res.render('index', { weather: weather, error: null });
        }
    } catch (error) {
        res.render('index', { weather: null, error: 'Error fetching weather data' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
