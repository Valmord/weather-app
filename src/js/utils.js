const NUMBER_OF_DP = 2;

export const fToCelsius = function fahrenheitToCelsius(temp) {
  const f = Number(temp);
  if (Number.isNaN(f)) throw Error("Invalid Value");
  return ((f - 32) * (5 / 9)).toFixed(NUMBER_OF_DP);
};

export const cToFahrenheit = function celsiusToFahrenheit(temp) {
  const c = Number(temp);
  if (Number.isNaN(c)) throw Error("Invalid Value");
  return ((c * 9) / 5 + 32).toFixed(NUMBER_OF_DP);
};

export const formatDateDDYY = function formatDateToDayYear(date) {
  // Example input 2024-12-27
  // Expected output Fri 27th Dec
  const newDate = new Date(date);
  const splitDate = newDate.toDateString().split(" ");
  const formattedDate = `${splitDate[0]} ${splitDate[2]} ${splitDate[1]}`;
  return formattedDate;
};

export const formatTime = function formatTimeFromString(time) {
  const timeArr = time.split(":");
  let timeHour = +timeArr[0] > 12 ? +timeArr[0] - 12 : +timeArr[0];
  if (timeHour === 0) timeHour = 12;
  const timeMinute = timeArr[1];
  const timeSuffix = +timeArr[0] > 11 ? "pm" : "am";
  return `${timeHour}:${timeMinute}${timeSuffix}`;
};
