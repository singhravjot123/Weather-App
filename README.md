

Weather Now 🌦️
A sleek and responsive weather application built with React and Vite. It provides real-time weather data for any city, featuring a dynamic UI that adapts to the current conditions for a beautiful and intuitive user experience.

[Live Demo Link] (<- Add your deployment link here!)

(<- Replace with a real screenshot or GIF of your project)

The Motivation
The goal was to build a clean, modern weather dashboard that solves a simple problem: getting essential weather information quickly without clutter. I focused on creating an engaging user experience where the application's look and feel—from the background to the text color—is directly influenced by the weather data itself.

Key Features
City-Based Weather Search: Instantly fetch current weather data for any city in the world.

Comprehensive Data Display: Shows all the essential information:

Current, minimum, and maximum temperature

"Feels like" temperature

Weather conditions (e.g., Clear, Clouds, Rain)

Humidity percentage

Dynamic Theming: The background image and UI panel colors automatically change to match the current weather conditions, creating an immersive experience.

Adaptive UI: Text and component colors dynamically adjust to maintain high contrast and readability against any background image.

Smooth Transitions: A subtle cross-fade effect ensures a seamless transition between background images.

Responsive Design: A mobile-first approach ensures the application is fully usable and looks great on all screen sizes.

Technology Stack
This project was built using a modern frontend stack, chosen for performance and developer experience:

Frontend: React.js

Build Tool: Vite (for its blazing-fast HMR and optimized builds)

UI Components: Material-UI (MUI) (for a robust set of pre-built, customizable components)

Styling: CSS Modules / Component-specific CSS files for organized styling.

Weather Data API: Open-Meteo API (A free, open-source API that doesn't require an API key)

Geocoding: Uses an integrated geocoding API to convert city names into geographical coordinates for the weather lookup.

Local Development Setup
To run this project locally, follow these steps:

1. Clone the repository:

Bash

git clone https://github.com/yourusername/your-repo-name.git
(<- Make sure to replace this URL with your actual repository URL)

2. Navigate to the project directory:

Bash

cd your-repo-name
3. Install dependencies:

Bash

npm install
4. Run the development server:

Bash

npm run dev
The application will be available at http://localhost:5173.

Other Scripts
Build for production:

Bash

npm run build
Preview the production build:

Bash

npm run preview
Application Flow
The application logic follows a clear, sequential flow:

The SearchPanel.jsx component captures the user's city input.

On submission, an asynchronous fetch request is made to a geocoding API to resolve the city name into latitude and longitude coordinates.

These coordinates are then used to make a second API call to Open-Meteo to retrieve the current weather data.

The fetched data updates the main application state managed within the WeatherApp.js logic container.

The UI re-renders based on the new state:

The InfoBox.jsx component displays the updated weather metrics.

A corresponding background image is selected based on the weather code.

The text and panel colors are dynamically adjusted for optimal contrast against the new background.

Project Structure
The source code is organized with a focus on clarity and co-location of component logic and styles.

src/
├── assets/
│   └── images/              # Contains all background images for weather conditions
│       ├── clear.jpg
│       ├── cloudy.jpg
│       ├── rainy.jpg
│       └── ...
│
├── App.css                  # Global styles for the main application component
├── App.jsx                  # The root component that renders the entire application
├── index.css                # Top-level global styles and resets
│
├── InfoBox.css              # Styles specific to the InfoBox component
├── InfoBox.jsx              # Component for displaying all weather data cards
│
├── SearchPanel.css          # Styles specific to the SearchPanel component
├── SearchPanel.jsx          # Component that handles city input and search functionality
│
├── weather.css              # Additional weather-specific styles
├── WeatherApp.js            # Contains the core application logic and state management
├── weatherCodes.js          # Utility to map API weather codes to readable strings
├── weatherImages.js         # Utility to map weather codes to background images
│
└── main.jsx                 # The main entry point for the React application


















































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
