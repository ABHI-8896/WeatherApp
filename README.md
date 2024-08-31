# Weather App

This is a simple Weather App built using Node.js, Express.js, and EJS templating engine. The app fetches weather data from the OpenWeatherMap API based on the city name entered by the user and displays current weather conditions along with a forecast for the upcoming days.

## Features

- Search for a city to get the current weather and forecast.
- Displays temperature, humidity, wind speed, and pressure.
- Shows the current date, time, and location.
- Provides weather icons to visually represent the current weather conditions.
- Displays minimum and maximum temperatures for the current and upcoming days.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templating)
- HTML5, CSS3
- OpenWeatherMap API
- Moment.js for date and time formatting
- ## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ABHI-8896/WeatherApp.git
   cd WeatherApp
   ```
2 **Install dependencies**
  ``` bash
npm install
```
3.**Start the application:**
 ``` bash
    npm index.js
 ```
4.**Open your browser and visit:**
 ``` bash
http://localhost:3000
```
## File Structure
The project has the following structure:
WeatherApp/
├── node_modules/                # Node.js dependencies
├── public/
│ ├── style.css                 # CSS styles for the application
│
├── views/
│  └── home.ejs                 # EJS template for rendering the weather informatio
│
├── index.js                     # Main server-side JavaScript file (Express server setup)
├── package.json                 # Project metadata and dependencies
├── package-lock.json            # Lock file for dependencies
└── README.md                    # Project documentation 

 
## How It Works

1. **Server Setup**:
   - The application uses Node.js with the Express framework.
   - The server (`app.js`) listens on port 3000 and handles HTTP requests.

2. **Dependencies**:
   - The app uses the following key dependencies:
     - **Express**: To set up the server and handle routing.
     - **Body-Parser**: To parse incoming request bodies.
     - **EJS**: To render HTML with embedded JavaScript for dynamic content.
     - **node-fetch**: To make API requests to the OpenWeatherMap API.

3. **Fetching Weather Data**:
   - The server fetches weather data from the OpenWeatherMap API using the `fetch` function when a city name is submitted via the form.
   - API responses are processed, and relevant data (temperature, humidity, wind speed, etc.) is extracted.

4. **Rendering Data**:
   - The fetched data is passed to an EJS template (`home.ejs`), which renders the weather information on the front-end.
   - Dynamic elements such as current temperature, humidity, and forecast details are displayed using EJS tags to insert data directly into the HTML.

5. **Styling**:
   - The application uses `style.css` for styling to make the UI visually appealing.
   - The CSS file is located in the `public` directory, which is served statically.

6. **User Interaction**:
   - Users can enter a city name in the search bar and submit the form to get updated weather data for that location.
   - The application updates the weather information on the page based on the API response.

This structure and setup make it easy to manage server-side logic, API calls, and front-end rendering efficiently.
## API Reference
- **OpenWeatherMap API**: [https://openweathermap.org/api](https://openweathermap.org/api)

## Future Enhancements
- Add error handling for invalid city names or API errors.
- Improve UI with additional weather details and styling enhancements.
- Implement additional features like hourly forecast or weather alerts.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.







