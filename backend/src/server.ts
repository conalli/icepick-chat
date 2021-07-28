import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("hello");
})

app.listen(8080, () => {
  console.log("Server is running on port: 8080");
})