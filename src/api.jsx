import axios from "axios";

import process from "process";

// const key = process.env.REACT_APP_YT_API_KEY;
// console.log(`API key = ${key}`);

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyA8OtTZdmz-dQsZNCs4nCfNYJJicSBfdCU",
  },
});

export default request;
