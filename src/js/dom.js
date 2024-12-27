import cloudyImage from "../assets/images/cloudy.jpg";
import defaultImage from "../assets/images/default.png";

const images = {
  default: { file: defaultImage, author: "" },
  sunny: {
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

const updateBackground = function updateBackgroundFromString(picture) {
  const body = document.querySelector("body");
  const image = images[picture] || images.default;
  body.style.backgroundImage = `url('${image.file}')`;
};

const updateDOM = function updateDOM() {
  updateBackground("string");
};

export default updateDOM;
