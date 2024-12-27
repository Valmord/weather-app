export const fToCelsius = function fahrenheitToCelsius(f) {
  return (f - 32) * (5 / 9);
};

export const cToFahrenheit = function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
};

export const formatDateDDYY = function formatDateToDayYear(date) {
  // Example input 2024-12-27
  // Expected output Fri 27th Dec
  const newDate = new Date(date);
  const splitDate = newDate.toDateString().split(" ");
  const formattedDate = `${splitDate[0]} ${splitDate[2]} ${splitDate[1]}`;
  return formattedDate;
};
