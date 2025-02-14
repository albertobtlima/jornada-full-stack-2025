import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://alberto:P6gDlprQV0opEwT9@cluster0.nb44t.mongodb.net/spotifyAula?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const database = client.db("spotifyAula");

// const songCollection = await database.collection("songs").find({}).toArray();

// console.log(songCollection);
