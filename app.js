import express from "express";
import { setHarryPotter, getHarryPotter } from "./dynamo.js";
const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/setCharacters", async (req, res) => {
  try {
    await setHarryPotter();
    res.send({ message: "data is succesfully added" });
  } catch (error) {
    return error;
  }
});
app.get("/characters", async (req, res) => {
  try {
    const data = await getHarryPotter();
    res.send({ message: "data fetched", data });
  } catch (error) {
    return error;
  }
});
app.listen("3000", () => {
  console.log("server is listening on", port);
});
