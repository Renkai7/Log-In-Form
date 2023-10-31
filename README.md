# Full-Stack Web Application with React, Node.js/Express.js, PostgreSQL, and Firebase Authentication

This is a full-stack web application template that uses a combination of technologies for building a web application. It includes the following components:

- Front-end built with React.js
- Back-end API server using Node.js and Express.js
- PostgreSQL database for storing user information
- Firebase Authentication for Google Sign-In

The project allows users to sign in with their Google accounts, and if their email is registered in the PostgreSQL database, they can access the web application's features.

## Project Structure

The project is structured into the following main components:

1. **Front-end**: The front-end is built using React.js. It includes user interfaces for signing in with Google and displaying the user's name after successful sign-in.

2. **Back-end**: The back-end is implemented with Node.js and Express.js. It provides the API endpoints for user registration and login. It also connects to the PostgreSQL database to store user information.

3. **PostgreSQL Database**: The database stores user data, including first name, last name, and email address.

4. **Firebase Authentication**: Firebase Authentication is used for Google Sign-In. It allows users to sign in securely using their Google accounts.

## Setup

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository**: Clone this repository to your local machine using `git clone`.

2. **Front-end Setup**:

   - Navigate to the `frontend` directory.
   - Install dependencies by running `npm install`.
   - Start the front-end server with `npm start`. It will run on port 3000 by default.

3. **Back-end Setup**:

   - Navigate to the `backend` directory.
   - Install dependencies by running `npm install`.
   - Start the back-end server with `npm start`. It will run on port 3001 by default.

4. **Database Setup**:

   - Set up a PostgreSQL database and update the database connection configuration in the `backend/models/index.js` file.

5. **Firebase Configuration**:

   - Set up a Firebase project and obtain the Firebase configuration (API key, auth domain, project ID).
   - Update the Firebase configuration in the `frontend/firebase.js` file.

6. **Run the Application**:
   - Visit `http://localhost:3000` in your web browser to access the application.

## Features

- User registration: Users can sign up with their Google accounts, and their information is stored in the PostgreSQL database.
- User login: Registered users can log in using their Google accounts.
- Display user's name: After successful login, the user's name is displayed on the home page.

## Project Customization

You can customize and expand this project by adding additional features, integrating more authentication providers, or enhancing the user interface.

## Contributing

Contributions to this project are welcome. If you find issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
