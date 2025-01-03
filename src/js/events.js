import updateDOM, { updateTemps, updateToggleBtn } from "./dom";

const { fetchData } = require("./api");

const searchInput = document.querySelector("input");
const form = document.querySelector("form");

const clearForm = function clearForm() {
  form.reset();
};

const setupListeners = function setupFormListeners() {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (searchInput.validity.valid) {
      const data = await fetchData(searchInput.value);
      if (!data) return;
      updateDOM(data);
      clearForm();
    }
  });

  // const toggleTempType = document.querySelector("#toggle-temp");
  // toggleTempType.addEventListener("click", () => {
  //   updateTemps();
  //   updateToggleBtn();
  // });
};

export default setupListeners;
