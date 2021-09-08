const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 3500;

app.use(
	cors({
		origin: "*",
	})
);

app.get("/", function (req, res) {
	res.send("Hello. Welcome to the App");
});

app.get("/users", function (req, res) {
	res.json({ message: "All is well" });
});

app.get("/products", function (req, res) {
	res.send("<h1>All products have been sold out</h1>");
});

app.get("/todolist", function (req, res) {
	res.json([
		{ id: 1, message: "Go to Gym", status: false },
		{ id: 2, message: "Have Breakfast", status: false },
		{ id: 3, message: "Go to Office", status: false },
	]);
});

app.listen(port, function () {
	console.log(`The Server is listening in ${port}`);
});
