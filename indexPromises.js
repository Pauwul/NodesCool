// The more concise way of working with requests
const express = require("express");
const { readFile } = require("fs").promises;

const app = express();

app.get("/", async (request, response) => {
  response.send(await readFile("./home.html", "utf8"));
});
