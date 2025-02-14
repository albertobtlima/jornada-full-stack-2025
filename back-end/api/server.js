import express from "express";
import cors from "cors";
import { database } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send(response);
});

app.get("/api/artists", async (request, response) => {
  response.send(await database.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await database.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
