const express = require("express");
const app = express();
const port = 8080;

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://sangyong:qkr3512tkddyd@cluster0.qqwzqvp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Conneted..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
