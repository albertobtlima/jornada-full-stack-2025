import { MongoClient } from "mongodb";

const client = new MongoClient(URI);

export const database = client.db("spotifyAula");

// const songCollection = await database.collection("songs").find({}).toArray();

// console.log(songCollection);
