import firebase from "firebase/compat/app"; // Use 'compat/app' for Firebase 8 or lower
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
