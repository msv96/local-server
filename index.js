const express = require("express");
const app = express();

app.get("/", function (req, res) {
	res.send("Hello. Welcome to the App");
});

app.get("/users", function (req, res) {
	res.send("All users are safe");
});

app.get("/products", function (req, res) {
	res.send("<h1>All products have been sold out</h1>");
});

app.listen(3030, function () {
	console.log("The Server is listening in port : 3030");
});
