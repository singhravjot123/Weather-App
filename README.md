Weather Now 🌦️
A sleek and responsive weather application built with React and Vite. It provides real-time weather data for any city in the world.The goal is to build a clean,modern weather dashboard that solves a simple problem: getting essential weather information

Link->https://codesandbox.io/p/github/singhravjot123/Weather-App/main

Key Features:

  >>City-Based Weather Search: Instantly fetch current weather data for any city in the world.
  >>Comprehensive Data Display: Shows all the essential information:
      Temperature In Celsius:(Current,Maximum,Minimum)
      Weather Conditions:(Clear,Cloudy,Rainy,Snow,Thunderstorm)
      Humidity Percentage
   >>Weather-Based Backgrounds:The background image dynamically updates to reflect the live weather conditions of the searched city.
   >>Adaptive UI:Text and UI components automatically adjust their colors based on the background image to remain visible in all scenarios.
   >>Responsive Design:The application is fully responsive and provides optimal viewing experience on all desktop and mobile devices.

Technology Stack:

  >>Framework Used:React JS
  >>Styling: Used Plain CSS,Material UI for styling purpose.
  >>State Management:Used React's built-in useState hook to manage all application state.
  >>Data Fetching: Consumed an Open Meteo Api(a free open source) for weather casting purpose.It has integrated geocoding API to convert city names into geographical coordinates for the weather lookup.

 Application Flow:
  
    When a user enter a city name into the (SearchPanel.jsx) component and click on search button,the SearchPanel component handles the asynchronous API call to fetch the corresponding weather data. On receiving a success result, the SearchPanel calls the updateInfo function and pass down as a prop to its parent component (WeatherApp.jsx). The updateInfo function in WeatherApp updates the weatherinfo state, which triggers a re-render of the component. During the re-render, the new weatherinfo state is passed down as a prop to the 
   (InfoBox.jsx) component, which then displays the updated weather details to the user.

