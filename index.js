require('dotenv').config()
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome");
})
app.get("/native", (req, res) => {
    res.send({
        "id": "hdk31ka8392uqp12bk",
        "name": "Kunal Halder"
    })
})
app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
})