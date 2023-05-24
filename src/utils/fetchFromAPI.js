import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    part: "snippet",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "d0b78dc01bmsh3c8caa170e839b2p1c1f94jsn6796cf4bb997",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
