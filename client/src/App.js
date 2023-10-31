import React, { useState, useEffect } from "react";
import "./App.css";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import { auth } from "./firebase"; // Import Firebase auth

function App() {
	const [user, setUser] = useState(null); // User information state
	const [error, setError] = useState(""); // Error state

	useEffect(() => {
		// Check if the user is authenticated when the component mounts
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				// User is authenticated, update the user state
				setUser(user);
			} else {
				// User is not authenticated, clear the user state
				setUser(null);
			}
		});

		// Unsubscribe from the Firebase authentication observer when the component unmounts
		return () => unsubscribe();
	}, []); // Empty dependency array to run this effect only once
	return (
		<div className="App">
			<SignIn />
			<SignUp />
		</div>
	);
}

export default App;
