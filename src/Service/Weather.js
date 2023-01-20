const API_KEY = "5b951a5e165e90b8d910a0fa7754d0b0";
const BASE_URL = "https://api.openweathermap.org/data/2.5";


const Weather = (infoType, searchParams) => {
   const url = new URLSearchParams(BASE_URL + "/" + infoType);
   url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

   return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
};
export default Weather;