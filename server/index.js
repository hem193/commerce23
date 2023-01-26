import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/users", (req, res) => {
  res.json({
    data: "Hemanth Kumar R",
  });
});

const port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
