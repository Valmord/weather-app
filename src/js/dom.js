import cloudyImage from "../assets/images/cloudy.jpg";
import defaultImage from "../assets/images/default.png";
import clearImage from "../assets/images/clear.jpg";

const images = {
  default: { file: defaultImage, author: "" },
  clear: {
    file: clearImage,
    author:
      'Photo by <a href="https://unsplash.com/@frostroomhead?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rodion Kutsaiev</a> on <a href="https://unsplash.com/photos/green-leafed-tree-near-withered-grass-a7IVuJwYjp8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  cloudy: {
    file: cloudyImage,
    author:
      'Photo by <a href="https://unsplash.com/@conti_photos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Fabrizio Conti</a> on <a href="https://unsplash.com/photos/photo-of-clouds-Mbm0WnJ5emc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  },
  rain: {},
  snow: {},
  thunder: {},
};

const getWeatherPicture = function (condition) {
  const keys = Object.keys(images);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].includes(condition.toLowerCase())) return images[keys[i]];
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
  body.style.backgroundImage = `url('${image.file}')`;
};

const createCurrentElements = function createCurrentElements(tempArray) {
  const tempContainer = document.createElement("div");
  tempContainer.className = "temp-container";

  const tempDescriptions = ["Low", "Current", "High"];

  tempArray.forEach((temp, index) => {
    const ul = document.createElement("ul");
    const desc = document.createElement("li");
    const value = document.createElement("li");
    ul.appendChild(desc);
    ul.appendChild(value);
    desc.textContent = tempDescriptions[index];
    value.textContent = `${temp}°`;
    tempContainer.appendChild(ul);
  });
  return tempContainer;
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

const updateDOM = function updateDOM(weatherData) {
  updateBackground(weatherData.currentConditions.conditions);
  updateForm();
  displayCurrent(weatherData.resolvedAddress, weatherData.days[0]);
};

const init = function initialiseDOM() {
  updateBackground("default");
};
init();

export default updateDOM;
