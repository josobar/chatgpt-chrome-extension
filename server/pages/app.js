import { Configuration, OpenAIApi } from "openai";
import express, { json } from "express";
import {} from "dotenv/config";

const app = express();
app.use(express.json());

const PORT = 3000;
const COMPLETION_TEMPERATURE = 0.6;
const MAX_TOKENS = 3000;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  res.sendfile("pages/image (1).png");
});

app.post("/generate", async (req, res) => {
  const inputPrompt = req.body.prompt;
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: inputPrompt,
      temperature: COMPLETION_TEMPERATURE,
      max_tokens: MAX_TOKENS,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
});

app.listen(PORT, () => {
  console.log("SERVER ONLINE :3");
});
