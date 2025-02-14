import express from "express";
import { database } from "./connect.js";

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
  response.send(response);
});

app.get("/artists", async (request, response) => {
  response.send(await database.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await database.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {});
