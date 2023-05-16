// server için gerekli olanları burada ayarlayın
const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("AYSEN");
});

module.exports = server;

// posts router'ını buraya require edin ve bağlayın
