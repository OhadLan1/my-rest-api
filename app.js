const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/my_rest_api")
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((err) => {
    console.log(err);
  });

const userRouter = require("./routers/users.js");
const authRouter = require("./routers/auth");
const cardsRouter = require("./routers/cards");

const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/cards", cardsRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`app listen on port ${PORT}`));
