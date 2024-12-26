export const fToCelsius = function fahrenheitToCelsius(f){
  return (f - 32) * (5 / 9);
}

export const cToFahrenheit = function celsiusToFahrenheit(c){
  return (c * 9 / 5) + 32;
}