const APIKEY = "N6JB6XKF7GYLF48QEPCXBTTPS";

const formatLocationForURL = function formatLocationByDelimiter(location) {
  const delimiter = "%20";
  return location.split(" ").join(delimiter);
};

const getFetchURL = function getFetchURL(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=days%2Ccurrent&key=${APIKEY}&contentType=json`;
  return url;
};

const fetchData = async function fetchDataFromAPI(location) {
  const urlLocation = formatLocationForURL(location);
  const url = getFetchURL(urlLocation);
  try {
    const response = await fetch(url);
    if (response.ok) {
      console.log(response);
      const data = await response.json();
      console.log(data);
    } else
      throw new Error(
        `Error, couldn't fetch. Response status ${response.status}`,
      );
  } catch (err) {
    console.error(err.message);
  }
};

export default fetchData;
