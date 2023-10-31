const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const cors = require("cors");

// Middleware
app.use(bodyParser.json());
const corsOptions = {
	origin: "http://localhost:3000", // Replace with the URL of your frontend
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const { User } = require("./models"); // Import your User model

// app.use((req, res, next) => {
// 	console.log("Request URL:", req.originalUrl);
// 	console.log("Request Body:", req.body);
// 	next();
// });

// Register route
app.post("/api/register", async (req, res) => {
	const { firstName, lastName, email } = req.body;

	try {
		// Check if the user already exists in the database
		const existingUser = await User.findOne({ where: { email } });

		if (existingUser) {
			return res.status(400).json({ error: "User already exists" });
		}

		// Create a new user record in the database
		const newUser = await User.create({ firstName, lastName, email });

		// Respond with a success message or user data
		res.json({ message: "User registered successfully", user: newUser });
	} catch (error) {
		// Handle registration error
		console.error(error);
		res.status(500).json({ error: "Registration failed" });
	}
});

// Login route
app.post("/api/login", async (req, res) => {
	const { email } = req.body;

	try {
		console.log("Received login request for email:", email); // Add this line for debugging

		// Check if the user exists in the PostgreSQL database
		const existingUser = await User.findOne({ where: { email } });

		if (existingUser) {
			// User exists in the database, you can also add password verification here
			// For simplicity, we're only checking if the user's email exists for now

			return res.json({ message: "User logged in successfully" });
		} else {
			// User not found in the database
			console.log("User not found in the database."); // Add this line for debugging
			return res.status(404).json({ error: "User not found in the database" });
		}
	} catch (error) {
		// Handle login error
		console.error(error);
		res.status(500).json({ error: "Login failed" });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
