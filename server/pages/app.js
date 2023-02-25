import { Configuration, OpenAIApi } from "openai";
import express, { json } from "express";

const app = express();
app.use(express.json());
const port = 3000;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  // res.send(JSON.stringify({ key: OPEN_AI_API_KEY }));
  res.sendfile("pages/image (1).png");
});

app.post("/generate", (req, res) => {
  // console.log(req.body)
  res.send(req.body);
  // console.log;
});

app.listen(port, () => {
  console.log("SERVER ONLINE :3");
});
