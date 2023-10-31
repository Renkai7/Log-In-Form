import React, { useState } from "react";
import { auth } from "./firebase"; // Import Firebase auth
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios"; // Import Axios for making requests

function SignIn() {
	const [userName, setUserName] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSignIn = (displayName) => {
		setUserName(displayName);
	};

	const handleGoogleSignIn = async () => {
		const provider = new GoogleAuthProvider();

		try {
			const result = await auth.signInWithPopup(provider);
			const user = result.user;

			const response = await axios.post("http://localhost:3001/api/login", {
				email: user.email,
			});

			if (response.data.message === "User logged in successfully") {
				handleSignIn(user.displayName);
				setErrorMessage("");
			} else {
				setErrorMessage("User not found in the database.");
				auth.signOut(); // Sign out the user if not found
			}
		} catch (error) {
			console.error(error);
		}
	};

	const handleSignOut = async () => {
		try {
			await auth.signOut();
			setUserName(""); // Clear user name on sign out
			setErrorMessage(""); // Clear any error message
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			{userName ? (
				<div>
					<h1>Welcome {userName}</h1>
					<button onClick={handleSignOut}>Sign Out</button>
				</div>
			) : (
				<div>
					<h2>Sign In</h2>
					<button onClick={handleGoogleSignIn}>Sign In with Google</button>
					{errorMessage && <p>{errorMessage}</p>}
				</div>
			)}
		</div>
	);
}

export default SignIn;
