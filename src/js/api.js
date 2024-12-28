const APIKEY = "N6JB6XKF7GYLF48QEPCXBTTPS";

const formatLocationForURL = function formatLocationByDelimiter(location) {
  const delimiter = "%20";
  return location.split(" ").join(delimiter);
};

const getFetchURL = function getFetchURL(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=days%2Ccurrent&key=${APIKEY}&contentType=json`;
  return url;
};

export const fetchData = async function fetchDataFromAPI(location) {
  const urlLocation = formatLocationForURL(location);
  const url = getFetchURL(urlLocation);
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(
        `Error, couldn't fetch. Response status ${response.status}`,
      );

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchIcon = async function fetchIconFromGithub(icon) {
  const url = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/SVG/1st%20Set%20-%20Color/${icon}.svg`;
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Couldn't fetch icon, status ${response.status}`);
    const data = await response.text();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};
