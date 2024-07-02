const apiKey = "610a38de6886b439c1e9fe71dbd9dc42";

async function checkWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  console.log("API Url:", apiUrl); // Check the constructed URL in console

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data); // Log the fetched data for inspection
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h ";
  } catch (error) {
    console.error("Error fetching weather:", error);
    // Handle errors (e.g., display an error message to the user)
  }
}

// Make sure these selectors match your HTML element class names
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", async () => {
  const city = searchBox.value; // Get the city name from the search box
  console.log("City Name:", city); // Check the retrieved city name
  checkWeather(city);
});