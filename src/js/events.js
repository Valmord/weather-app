const { default: fetchData } = require("./api");

const searchInput = document.querySelector("input");
const form = document.querySelector("form");

const clearForm = function clearForm() {
  form.reset();
};

const setupListeners = function setupFormListeners() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (searchInput.validity.valid) {
      fetchData(searchInput.value);
      clearForm();
    }
  });
};

export default setupListeners;
