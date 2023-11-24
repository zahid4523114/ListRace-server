const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const explore = require("./explore.json");

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(explore);
});

app.get("/explore/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const explorer = explore.find((e) => e.id === id);
  const explorers = explore.filter((e) => e.id !== id);
  res.send([explorer, explorers]);
});

app.listen(port, () => {
  console.log(`port is ${port}`);
});
