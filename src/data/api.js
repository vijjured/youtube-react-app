import axios from "axios";

const API_KEY = "AIzaSyC097xtzYw5tmlJHOoEyi-8agxh-_elV3g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY
  }
});
