import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  baseURL: "",
});

export default instance;