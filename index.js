const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("up and running!");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`RUNNING ON ${PORT}`);
});
