// external modules

const express = require("express");
const path = require("path");
const {Client} = require("pg");

const app = express();
const port = process.env.PORT || "4000";


//configs
app.use(express.static(__dirname + '/views/'));

//routes

app.get("/", (req,res) => {
	console.log('here i am');
	res.sendFile(views/index.html);
});


//on activation

console.log(port);
app.listen(port, () => {
	console.log('listening on port:');
});
