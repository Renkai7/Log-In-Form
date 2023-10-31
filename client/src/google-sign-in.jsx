// google-sign-up.jsx (renamed from google-sign-in.jsx)

import React from "react";
import { auth } from "./firebase";
import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";

function GoogleSignUp({ onSignIn, onError }) {
	const handleGoogleSignUp = async () => {
		const provider = new GoogleAuthProvider();
		try {
			const result = await auth.signInWithPopup(provider);
			const user = result.user;

			const userData = {
				firstName: user.displayName.split(" ")[0],
				lastName: user.displayName.split(" ")[1] || "", // Add fallback for last name
				email: user.email,
			};

			await axios.post("http://localhost:3001/api/register", userData);
			onSignIn(userData.firstName);
		} catch (error) {
			console.error(error);
			onError(error.message); // Pass error message to parent component
		}
	};

	return (
		<div>
			<button onClick={handleGoogleSignUp}>Sign Up with Google</button>
		</div>
	);
}

export default GoogleSignUp;
