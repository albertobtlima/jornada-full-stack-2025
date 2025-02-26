//import "dotenv/config";
import axios from "axios";

// const NODE_ENV = process.env.NODE_ENV;
// const URL = NODE_ENV === "development" ? "http://localhost:3000/api" : "/api";

// const URL = "http://localhost:3000/api";

const URL = "https://jornada-full-stack-2025.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

//console.log(responseArtists.data);
//console.log(responseSongs.data);
