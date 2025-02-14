import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { database } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongtObj) => {
  const newSongObj = { ...currentSongtObj };
  delete newSongObj.id;

  return newSongObj;
});

const responseArtists = await database
  .collection("artists")
  .insertMany(newArtistArray);
const responseSongs = await database
  .collection("songs")
  .insertMany(newSongsArray);

// console.log(newArtistArray);
// console.log(newSongsArray);
// console.log(responseArtists);
// console.log(responseSongs);
