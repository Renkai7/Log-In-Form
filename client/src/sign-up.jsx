// sign-up.jsx

import React, { useState } from "react";
import GoogleSignIn from "./google-sign-in";

function SignUp() {
	const [userName, setUserName] = useState("");
	const [error, setError] = useState("");

	const handleSignIn = (displayName) => {
		setUserName(displayName);
	};

	const handleError = (errorMessage) => {
		setError(errorMessage);
	};

	return (
		<div>
			<h2>Sign Up</h2>
			{error && <p style={{ color: "red" }}>{error}</p>}
			{userName ? (
				<div>
					<h1>Welcome {userName}</h1>
				</div>
			) : (
				<GoogleSignIn onSignIn={handleSignIn} onError={handleError} />
			)}
		</div>
	);
}

export default SignUp;
