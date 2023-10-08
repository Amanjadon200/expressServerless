import express from "express";
import serverless from "serverless-http";
import { setHarryPotter, getHarryPotter } from "./dynamo.js";
const app = express();
// const port = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  console.log('hi aman')
  return res.send("hello world");
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
const handler=()=>{
  serverless(app);
}
export {handler} 