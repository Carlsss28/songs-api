const express = require("express");
const cors = require("cors");
const songs = require("./data/songs.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Health check (useful for Render)
app.get("/", (req, res) => {
  res.json({ status: "ok", endpoints: ["/songs", "/songs/:id"] });
});

// List all songs. Optional filter: /songs?genre=Rock
app.get("/songs", (req, res) => {
  const { genre } = req.query;
  const result = genre
    ? songs.filter((s) => s.genre.toLowerCase() === String(genre).toLowerCase())
    : songs;
  res.json(result);
});

// Song detail
app.get("/songs/:id", (req, res) => {
  const song = songs.find((s) => s.id === Number(req.params.id));
  if (!song) {
    return res.status(404).json({ message: "Song not found" });
  }
  res.json(song);
});

app.listen(PORT, () => {
  console.log(`Songs API running on port ${PORT}`);
});
