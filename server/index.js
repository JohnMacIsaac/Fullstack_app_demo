require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

// controllers
const { getItems } = require("./ctrl");

const app = express();

app.use(json());
// console.log(process.env.CONNECTION_STRING);

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

// test endpoint
// app.get("/api/test", (req, res) => {
//   res.status(200).json("Happy Success!!!!");
// });

// endpoints
app.get("/api/items", getItems);

const port = 3001;
app.listen(port, () => console.log(`Ayyyy all good from ${port}`));
