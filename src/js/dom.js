import cloudyImage from "../assets/images/cloudy.jpg";
import defaultImage from "../assets/images/default.png";
import clearImage from "../assets/images/clear.jpg";
import rainImage from "../assets/images/rain.jpg";
import lightningImage from "../assets/images/lightning.jpg";
import snowImage from "../assets/images/snow.jpg";
import { cToFahrenheit, formatDateDDYY, fToCelsius } from "./utils";

let isCelsius = true;
const convertTemp = function convertTempIfRequired(temp) {
  if (isCelsius) {
    return fToCelsius(temp);
  }
  return Number(temp).toFixed(2);
};

export const updateToggleBtn = function updateToggleBtn() {
  const toggleBtn = document.querySelector("#toggle-temp");
  if (isCelsius) {
    toggleBtn.textContent = "Change to °F";
  } else {
    toggleBtn.textContent = "Change to °C";
  }
};

export const updateTemps = function updateTempsBasedOnAbove() {
  isCelsius = !isCelsius;
  if (isCelsius) {
    /* eslint-disable no-param-reassign */
    const temps = document.querySelectorAll(".temp");
    temps.forEach((temp) => {
      temp.className = "temp-celsius";
      temp.textContent = fToCelsius(temp.textContent);
    });
  } else {
    const temps = document.querySelectorAll(".temp-celsius");
    temps.forEach((temp) => {
      temp.className = "temp";
      temp.textContent = cToFahrenheit(temp.textContent);
      /* eslint-enable no-param-reassign */
    });
  }
};

const images = {
  default: defaultImage,
  clear: clearImage,
  cloudy: cloudyImage,
  rain: rainImage,
  snow: snowImage,
  thunder: lightningImage,
  lightning: lightningImage,
};

const getWeatherPicture = function (condition) {
  const keys = Object.keys(images);
  for (let i = 0; i < keys.length; i++) {
    if (condition.toLowerCase().includes(keys[i])) return images[keys[i]];
  }
  return images.default;
};

const updateForm = function updateFormClasses() {
  const form = document.querySelector("form");
  const outputElement = document.querySelector(".output");

  form.classList.add("search");
  outputElement.classList.remove("hidden");
};

const updateBackground = function updateBackgroundFromString(condition) {
  const body = document.querySelector("body");
  const image = getWeatherPicture(condition);
  body.style.backgroundImage = `url('${image}')`;
};

const createCurrentElements = function createCurrentElements(tempArray) {
  const tempContainer = document.createElement("div");
  tempContainer.className = "temp-container";

  const tempDescriptions = ["Low", "Current", "High"];

  tempArray.forEach((temp, index) => {
    const container = document.createElement("div");
    const desc = document.createElement("h5");
    const value = document.createElement("p");
    container.appendChild(desc);
    container.appendChild(value);
    desc.textContent = tempDescriptions[index];
    value.textContent = convertTemp(temp);
    value.classList.add("temp-celsius");
    tempContainer.appendChild(container);
  });
  return tempContainer;
};

const clearTemps = function clearTemps() {
  const tempContainers = document.querySelectorAll(".temp-container");
  tempContainers.forEach((container) => {
    container.remove();
  });
};

const displayCurrent = function displayCurrentWeatherData(
  search,
  { temp, tempmin, tempmax },
) {
  const tempElement = document.querySelector(".current");
  const header = tempElement.querySelector("h4");
  header.textContent = search;

  tempElement.appendChild(createCurrentElements([tempmin, temp, tempmax]));
};

const createFutureElements = function createFutureElements(dayArray) {
  const tempContainer = document.createElement("div");
  tempContainer.className = "temp-container";

  dayArray.forEach((day) => {
    const container = document.createElement("div");
    const date = document.createElement("h5");
    const min = document.createElement("p");
    const current = document.createElement("p");
    const max = document.createElement("p");
    container.appendChild(date);
    container.appendChild(min);
    container.appendChild(current);
    container.appendChild(max);

    date.textContent = formatDateDDYY(day.datetime);
    min.textContent = convertTemp(day.tempmin);
    current.textContent = convertTemp(day.temp);
    max.textContent = convertTemp(day.tempmax);

    min.classList.add("temp-celsius");
    current.classList.add("temp-celsius");
    max.classList.add("temp-celsius");

    tempContainer.appendChild(container);
  });
  return tempContainer;
};

const DAYS_TO_DISPLAY = 3;

const displayFuture = function displayFutureWeatherData(dayData) {
  const futureElement = document.querySelector(".future");
  futureElement.appendChild(
    createFutureElements(dayData.slice(1, DAYS_TO_DISPLAY + 1)),
  );
};

const updateDOM = function updateDOM(weatherData) {
  updateBackground(weatherData.currentConditions.icon);
  updateForm();
  clearTemps();
  displayCurrent(weatherData.resolvedAddress, weatherData.days[0]);
  displayFuture(weatherData.days);
};

const init = function initialiseDOM() {
  updateBackground("default");
};
init();

export default updateDOM;
