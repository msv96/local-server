const express = require("express");
const app = express();

app.get("/", function (req, res) {
	res.send("Hello. Welcome to the App");
});

app.listen(3030, function () {
	console.log("The Server is listening in port : 3030");
});
