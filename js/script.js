"use strict";

// Input fields and containers
const submitContainer = document.querySelector(".submit");
const weatherContainer = document.querySelector(".weather");
const getMyWeatherBtn = document.querySelector("#location-btn");
const getCityBtn = document.querySelector("#city-btn");
const cityDropdown = document.querySelector("#select");
const cityDropdownBtn = document.querySelector("#city-btn");
const logo = document.querySelector(".logo");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
// Refresh data
const refreshDataBtn = document.querySelector(".refresh");

// Forecast location
const forecastLocation = document.querySelector(".city");

// Hour forecast
// Hour 0
let hr0Img = document.querySelector(".hr0-img");
let hr0Temp = document.querySelector("#hr0-temp");
let hr0WindDir = document.querySelector("#hr0-wind-direction");
let hr0WindSpeed = document.querySelector("#hr0-wind-speed");
let hr0Time = document.querySelector("#hr0-time");
// Hour 1
let hr1Img = document.querySelector(".hr1-img");
let hr1Temp = document.querySelector("#hr1-temp");
let hr1WindDir = document.querySelector("#hr1-wind-direction");
let hr1WindSpeed = document.querySelector("#hr1-wind-speed");
let hr1Time = document.querySelector("#hr1-time");
// Hour 2
let hr2Img = document.querySelector(".hr2-img");
let hr2Temp = document.querySelector("#hr2-temp");
let hr2WindDir = document.querySelector("#hr2-wind-direction");
let hr2WindSpeed = document.querySelector("#hr2-wind-speed");
let hr2Time = document.querySelector("#hr2-time");
// Hour 3
let hr3Img = document.querySelector(".hr3-img");
let hr3Temp = document.querySelector("#hr3-temp");
let hr3WindDir = document.querySelector("#hr3-wind-direction");
let hr3WindSpeed = document.querySelector("#hr3-wind-speed");
let hr3Time = document.querySelector("#hr3-time");
// Hour 4
let hr4Img = document.querySelector(".hr4-img");
let hr4Temp = document.querySelector("#hr4-temp");
let hr4WindDir = document.querySelector("#hr4-wind-direction");
let hr4WindSpeed = document.querySelector("#hr4-wind-speed");
let hr4Time = document.querySelector("#hr4-time");
// Hour 5
let hr5Img = document.querySelector(".hr5-img");
let hr5Temp = document.querySelector("#hr5-temp");
let hr5WindDir = document.querySelector("#hr5-wind-direction");
let hr5WindSpeed = document.querySelector("#hr5-wind-speed");
let hr5Time = document.querySelector("#hr5-time");
// Hour 6
let hr6Img = document.querySelector(".hr6-img");
let hr6Temp = document.querySelector("#hr6-temp");
let hr6WindDir = document.querySelector("#hr6-wind-direction");
let hr6WindSpeed = document.querySelector("#hr6-wind-speed");
let hr6Time = document.querySelector("#hr6-time");
// Hour 7
let hr7Img = document.querySelector(".hr7-img");
let hr7Temp = document.querySelector("#hr7-temp");
let hr7WindDir = document.querySelector("#hr7-wind-direction");
let hr7WindSpeed = document.querySelector("#hr7-wind-speed");
let hr7Time = document.querySelector("#hr7-time");

// 7 day forecast
// Day 1
let day1Img = document.querySelector(".day1-img");
let day1HighTemp = document.querySelector(".day1 h2");
let day1LowTemp = document.querySelector(".day1 h3");
let day1Date = document.querySelector(".day1 h4");
// Day 2
let day2Img = document.querySelector(".day2-img");
let day2HighTemp = document.querySelector(".day2 h2");
let day2LowTemp = document.querySelector(".day2 h3");
let day2Date = document.querySelector(".day2 h4");
// Day 3
let day3Img = document.querySelector(".day3-img");
let day3HighTemp = document.querySelector(".day3 h2");
let day3LowTemp = document.querySelector(".day3 h3");
let day3Date = document.querySelector(".day3 h4");
// Day 4
let day4Img = document.querySelector(".day4-img");
let day4HighTemp = document.querySelector(".day4 h2");
let day4LowTemp = document.querySelector(".day4 h3");
let day4Date = document.querySelector(".day4 h4");
// Day 5
let day5Img = document.querySelector(".day5-img");
let day5HighTemp = document.querySelector(".day5 h2");
let day5LowTemp = document.querySelector(".day5 h3");
let day5Date = document.querySelector(".day5 h4");
// Day 6
let day6Img = document.querySelector(".day6-img");
let day6HighTemp = document.querySelector(".day6 h2");
let day6LowTemp = document.querySelector(".day6 h3");
let day6Date = document.querySelector(".day6 h4");
// Day 7
let day7Img = document.querySelector(".day7-img");
let day7HighTemp = document.querySelector(".day7 h2");
let day7LowTemp = document.querySelector(".day7 h3");
let day7Date = document.querySelector(".day7 h4");

// Fetching API and location functions
let lat;
let lng;

const hrInfoFunction = function () {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,weathercode,windspeed_10m,winddirection_10m&timezone=Europe%2FBerlin`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.hourly.temperature_2m[0]);
      let hour = Number(
        new Date().toLocaleString("lv-LV", { hour: "2-digit" })
      );

      // Hour 0
      weatherCondition(hr0Img, data.hourly.weathercode[hour + 1]);
      hr0Temp.textContent = `🌡️ ${data.hourly.temperature_2m[hour + 1]}${
        data.hourly_units.temperature_2m
      }`;
      hr0WindDir.textContent = `🧭 ${getWindDirection(
        data.hourly.winddirection_10m[hour + 1]
      )}`;
      hr0WindSpeed.textContent = `${(
        data.hourly.windspeed_10m[hour + 1] *
        (5 / 18)
      ).toFixed(2)} m/s`;
      hr0Time.textContent = `${new Date(data.hourly.time[hour]).toLocaleString(
        "lv-LV",
        { hour: "2-digit", minute: "2-digit" }
      )}`;
      // Hour 1
      weatherCondition(hr1Img, data.hourly.weathercode[hour + 2]);
      hr1Temp.textContent = `🌡️ ${data.hourly.temperature_2m[hour + 2]}${
        data.hourly_units.temperature_2m
      }`;
      hr1WindDir.textContent = `🧭 ${getWindDirection(
        data.hourly.winddirection_10m[hour + 2]
      )}`;
      hr1WindSpeed.textContent = `${(
        data.hourly.windspeed_10m[hour + 2] *
        (5 / 18)
      ).toFixed(2)} m/s`;
      hr1Time.textContent = `${new Date(
        data.hourly.time[hour + 1]
      ).toLocaleString("lv-LV", { hour: "2-digit", minute: "2-digit" })}`;
      // Hour 2
      weatherCondition(hr2Img, data.hourly.weathercode[hour + 3]);
      hr2Temp.textContent = `🌡️ ${data.hourly.temperature_2m[hour + 3]}${
        data.hourly_units.temperature_2m
      }`;
      hr2WindDir.textContent = `🧭 ${getWindDirection(
        data.hourly.winddirection_10m[hour + 3]
      )}`;
      hr2WindSpeed.textContent = `${(
        data.hourly.windspeed_10m[hour + 3] *
        (5 / 18)
      ).toFixed(2)} m/s`;
      hr2Time.textContent = `${new Date(
        data.hourly.time[hour + 2]
      ).toLocaleString("lv-LV", { hour: "2-digit", minute: "2-digit" })}`;
      // Hour 3
      weatherCondition(hr3Img, data.hourly.weathercode[hour + 4]);
      hr3Temp.textContent = `🌡️ ${data.hourly.temperature_2m[hour + 4]}${
        data.hourly_units.temperature_2m
      }`;
      hr3WindDir.textContent = `🧭 ${getWindDirection(
        data.hourly.winddirection_10m[hour + 4]
      )}`;
      hr3WindSpeed.textContent = `${(
        data.hourly.windspeed_10m[hour + 4] *
        (5 / 18)
      ).toFixed(2)} m/s`;
      hr3Time.textContent = `${new Date(
        data.hourly.time[hour + 3]
      ).toLocaleString("lv-LV", { hour: "2-digit", minute: "2-digit" })}`;
      // Hour 4
      weatherCondition(hr4Img, data.hourly.weathercode[hour + 5]);
      hr4Temp.textContent = `🌡️ ${data.hourly.temperature_2m[hour + 5]}${
        data.hourly_units.temperature_2m
      }`;
      hr4WindDir.textContent = `🧭 ${getWindDirection(
        data.hourly.winddirection_10m[hour + 5]
      )}`;
      hr4WindSpeed.textContent = `${(
        data.hourly.windspeed_10m[hour + 5] *
        (5 / 18)
      ).toFixed(2)} m/s`;
      hr4Time.textContent = `${new Date(
        data.hourly.time[hour + 4]
      ).toLocaleString("lv-LV", { hour: "2-digit", minute: "2-digit" })}`;
      // Hour 5
      weatherCondition(hr5Img, data.hourly.weathercode[hour + 6]);
      hr5Temp.textContent = `🌡️ ${data.hourly.temperature_2m[hour + 6]}${
        data.hourly_units.temperature_2m
      }`;
      hr5WindDir.textContent = `🧭 ${getWindDirection(
        data.hourly.winddirection_10m[hour + 6]
      )}`;
      hr5WindSpeed.textContent = `${(
        data.hourly.windspeed_10m[hour + 6] *
        (5 / 18)
      ).toFixed(2)} m/s`;
      hr5Time.textContent = `${new Date(
        data.hourly.time[hour + 5]
      ).toLocaleString("lv-LV", { hour: "2-digit", minute: "2-digit" })}`;
      // Hour 6
      weatherCondition(hr6Img, data.hourly.weathercode[hour + 7]);
      hr6Temp.textContent = `🌡️ ${data.hourly.temperature_2m[hour + 7]}${
        data.hourly_units.temperature_2m
      }`;
      hr6WindDir.textContent = `🧭 ${getWindDirection(
        data.hourly.winddirection_10m[hour + 7]
      )}`;
      hr6WindSpeed.textContent = `${(
        data.hourly.windspeed_10m[hour + 7] *
        (5 / 18)
      ).toFixed(2)} m/s`;
      hr6Time.textContent = `${new Date(
        data.hourly.time[hour + 6]
      ).toLocaleString("lv-LV", { hour: "2-digit", minute: "2-digit" })}`;
      // Hour 7
      weatherCondition(hr7Img, data.hourly.weathercode[hour + 8]);
      hr7Temp.textContent = `🌡️ ${data.hourly.temperature_2m[hour + 8]}${
        data.hourly_units.temperature_2m
      }`;
      hr7WindDir.textContent = `🧭 ${getWindDirection(
        data.hourly.winddirection_10m[hour + 8]
      )}`;
      hr7WindSpeed.textContent = `${(
        data.hourly.windspeed_10m[hour + 8] *
        (5 / 18)
      ).toFixed(2)} m/s`;
      hr7Time.textContent = `${new Date(
        data.hourly.time[hour + 7]
      ).toLocaleString("lv-LV", { hour: "2-digit", minute: "2-digit" })}`;
    });
};

const dayInfoFunction = function () {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.daily.temperature_2m_max[0]);
      submitContainer.classList.toggle("none");
      weatherContainer.classList.toggle("none");
      logo.classList.toggle("nav");
      footer.style.position = "relative";
      body.style.justifyContent = "flex-start";
      // Updating 7 day forecast data

      // Day 1
      weatherCondition(day1Img, data.daily.weathercode[0]);
      day1HighTemp.textContent = `♨️ ${data.daily.temperature_2m_max[0]}${data.daily_units.temperature_2m_max}`;
      day1LowTemp.textContent = `❄️ ${data.daily.temperature_2m_min[0]}${data.daily_units.temperature_2m_max}`;
      day1Date.textContent = `${new Date(data.daily.time[0]).toLocaleString(
        "en",
        { weekday: "short", day: "numeric", month: "short" }
      )}`;
      // Day 2
      weatherCondition(day2Img, data.daily.weathercode[1]);
      day2HighTemp.textContent = `♨️ ${data.daily.temperature_2m_max[1]}${data.daily_units.temperature_2m_max}`;
      day2LowTemp.textContent = `❄️ ${data.daily.temperature_2m_min[1]}${data.daily_units.temperature_2m_max}`;
      day2Date.textContent = `${new Date(data.daily.time[1]).toLocaleString(
        "en",
        { weekday: "short", day: "numeric", month: "short" }
      )}`;
      // Day 3
      weatherCondition(day3Img, data.daily.weathercode[2]);
      day3HighTemp.textContent = `♨️ ${data.daily.temperature_2m_max[2]}${data.daily_units.temperature_2m_max}`;
      day3LowTemp.textContent = `❄️ ${data.daily.temperature_2m_min[2]}${data.daily_units.temperature_2m_max}`;
      day3Date.textContent = `${new Date(data.daily.time[2]).toLocaleString(
        "en",
        { weekday: "short", day: "numeric", month: "short" }
      )}`;
      // Day 4
      weatherCondition(day4Img, data.daily.weathercode[3]);
      day4HighTemp.textContent = `♨️ ${data.daily.temperature_2m_max[3]}${data.daily_units.temperature_2m_max}`;
      day4LowTemp.textContent = `❄️ ${data.daily.temperature_2m_min[3]}${data.daily_units.temperature_2m_max}`;
      day4Date.textContent = `${new Date(data.daily.time[3]).toLocaleString(
        "en",
        { weekday: "short", day: "numeric", month: "short" }
      )}`;
      // Day 5
      weatherCondition(day5Img, data.daily.weathercode[4]);
      day5HighTemp.textContent = `♨️ ${data.daily.temperature_2m_max[4]}${data.daily_units.temperature_2m_max}`;
      day5LowTemp.textContent = `❄️ ${data.daily.temperature_2m_min[4]}${data.daily_units.temperature_2m_max}`;
      day5Date.textContent = `${new Date(data.daily.time[4]).toLocaleString(
        "en",
        { weekday: "short", day: "numeric", month: "short" }
      )}`;
      // Day 6
      weatherCondition(day6Img, data.daily.weathercode[5]);
      day6HighTemp.textContent = `♨️ ${data.daily.temperature_2m_max[5]}${data.daily_units.temperature_2m_max}`;
      day6LowTemp.textContent = `❄️ ${data.daily.temperature_2m_min[5]}${data.daily_units.temperature_2m_max}`;
      day6Date.textContent = `${new Date(data.daily.time[5]).toLocaleString(
        "en",
        { weekday: "short", day: "numeric", month: "short" }
      )}`;
      // Day 7
      weatherCondition(day7Img, data.daily.weathercode[6]);
      day7HighTemp.textContent = `♨️ ${data.daily.temperature_2m_max[6]}${data.daily_units.temperature_2m_max}`;
      day7LowTemp.textContent = `❄️ ${data.daily.temperature_2m_min[6]}${data.daily_units.temperature_2m_max}`;
      day7Date.textContent = `${new Date(data.daily.time[6]).toLocaleString(
        "en",
        { weekday: "short", day: "numeric", month: "short" }
      )}`;
    });
};

const locatonFunction = function () {
  fetch(
    `https://nominatim.geocoding.ai/reverse.php?lat=${lat}&lon=${lng}&zoom=18&format=jsonv2`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      forecastLocation.textContent = `Forecast in ${data.address.city}, ${
        data.address.country
      } at ${new Date().toLocaleString("en", {
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "short",
        hour12: false,
      })}`;
    });
};

const getWindDirection = function (x) {
  if (x > 348.75 || x < 11.25) {
    return "North";
  } else if (x > 11.25 && x < 33.75) {
    return "North-Northeast";
  } else if (x > 33.75 && x < 56.25) {
    return "North-East";
  } else if (x > 56.25 && x < 78.75) {
    return "East-Northeast";
  } else if (x > 78.75 && x < 101.25) {
    return "East";
  } else if (x > 101.25 && x < 123.75) {
    return "East-Southeast";
  } else if (x > 123.75 && x < 146.25) {
    return "South-East";
  } else if (x > 146.25 && x < 168.75) {
    return "South-Southeast";
  } else if (x > 168.75 && x < 191.25) {
    return "South";
  } else if (x > 191.25 && x < 213.75) {
    return "South-Southwest";
  } else if (x > 213.75 && x < 236.25) {
    return "South-West";
  } else if (x > 236.25 && x < 258.75) {
    return "West-Southwest";
  } else if (x > 258.75 && x < 281.25) {
    return "West";
  } else if (x > 281.25 && x < 303.75) {
    return "West-Northwest";
  } else if (x > 303.75 && x < 326.25) {
    return "North-West";
  } else if (x > 326.25 && x < 348.75) {
    return "North-Northwest";
  }
};

const weatherCondition = function (img, x) {
  if (x >= 0 && x <= 19) {
    img.src = `http://openweathermap.org/img/wn/01d@2x.png`;
  } else if (x >= 20 && x <= 29) {
    img.src = `http://openweathermap.org/img/wn/09d@2x.png`;
  } else if (x >= 30 && x <= 39) {
    img.src = `http://openweathermap.org/img/wn/03d@2x.png`;
  } else if (x >= 40 && x <= 49) {
    img.src = `http://openweathermap.org/img/wn/04d@2x.png`;
  } else if (x >= 50 && x <= 69) {
    img.src = `http://openweathermap.org/img/wn/09d@2x.png`;
  } else if (x >= 70 && x <= 79) {
    img.src = `http://openweathermap.org/img/wn/13d@2x.png`;
  } else if (x >= 80 && x <= 99) {
    img.src = `http://openweathermap.org/img/wn/11d@2x.png`;
  }
};

// cloudy http://openweathermap.org/img/wn/04d@2x.png
// little cloud http://openweathermap.org/img/wn/03d@2x.png
// rain http://openweathermap.org/img/wn/09d@2x.png
// snow http://openweathermap.org/img/wn/13d@2x.png
// thunder http://openweathermap.org/img/wn/11d@2x.png
// windy http://openweathermap.org/img/wn/50d@2x.png
// sunny http://openweathermap.org/img/wn/01d@2x.png
// partly sunny http://openweathermap.org/img/wn/02d@2x.png

// Event listeners
getMyWeatherBtn.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    console.log(lat, lng);
    hrInfoFunction();
    dayInfoFunction();
    locatonFunction();
  });
});

cityDropdownBtn.addEventListener("click", function () {
  if (cityDropdown.value === "Berlin") {
    lat = 52.520008;
    lng = 13.404954;
  } else if (cityDropdown.value === "São Paulo") {
    lat = -23.533773;
    lng = -46.62529;
  } else if (cityDropdown.value === "Toronto") {
    lat = 43.65107;
    lng = -79.347015;
  } else if (cityDropdown.value === "Adelaide") {
    lat = -34.92123;
    lng = 138.599503;
  } else if (cityDropdown.value === "Cape Town") {
    lat = -33.918861;
    lng = 18.4233;
  } else if (cityDropdown.value === "Tbilisi") {
    lat = 41.716667;
    lng = 44.783333;
  } else if (cityDropdown.value === "New Delhi") {
    lat = 28.6448;
    lng = 77.216721;
  } else if (cityDropdown.value === "Reykjavik") {
    lat = 64.128288;
    lng = -21.827774;
  } else return console.error("Error");
  hrInfoFunction();
  dayInfoFunction();
  locatonFunction();
});

refreshDataBtn.addEventListener("click", function () {
  submitContainer.classList.toggle("none");
  weatherContainer.classList.toggle("none");
  logo.classList.toggle("nav");
  footer.style.position = "absolute";
  body.style.justifyContent = "center";
});
