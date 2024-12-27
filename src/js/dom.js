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

const updateBackground = function updateBackgroundFromString(condition) {
  const body = document.querySelector("body");
  const image = getWeatherPicture(condition);
  body.style.backgroundImage = `url('${image.file}')`;
};

const updateDOM = function updateDOM(weatherData) {
  updateBackground(weatherData.currentConditions.conditions);
};

export default updateDOM;
