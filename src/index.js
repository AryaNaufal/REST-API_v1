const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const app = express();

app.use(cors({
  origin: "Hello Bitch!",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}))

dotenv.config();

const PORT = process.env.PORT;

const userController = require("./user/user.controller");

app.use("/users", userController);

app.get('/api', (req, res) => {
  res.send("Hello World");
})

app.listen(PORT, () => {
  console.log(`Aplikasi berjalan di port ${PORT}`)
})
