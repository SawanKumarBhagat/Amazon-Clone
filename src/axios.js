import axios from "axios";

const instance = axios.create({
  // The API (cloud function) URL
  baseURL: "https://us-central1-challenge-50279.cloudfunctions.net/api",
  // for debugging purpose - http://127.0.0.1:5001/challenge-50279/us-central1/api
});

export default instance;
