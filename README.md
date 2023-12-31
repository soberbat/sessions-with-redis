# AUTH

## Description

A Backend Api That handles User Authentication

## Tech Stack

This project is built using the following technologies and tools:

- **Express**: Node.js web application framework

- **CORS (Cross-Origin Resource Sharing)**: Middleware for Express that enables cross-origin requests

- **Redis**: Data structure store session management

- **MySQL**: The database to use for user data

- **Cookies for Authentication**: A strategy for user authentication that relies on cookies to store and manage session data.

- **Docker**: A platform for developing applications in containers.

## Installation

To get started with this project, follow these steps:

1. Clone or download the repository

2. NPM Install

3. Build and run the Docker container

## Docker Usage

Follow these steps to build and run the project in a container:

1. Build the Docker image:

   ```bash
   docker build -t authbackend .
   ```

2. Run the Docker container:

   ```bash
   docker compose up
   ```

3. Access the application from a http client like nodemon `http://localhost:3001`. And send request to following routes:

### User Registration

**Route:** `/signup`

**What it does:**

- This is where you sign up for a new user account.
- To sign up, you need to send a POST request with your chosen username, password, and email.
- If your registration is successful, you'll be logged in, a cookie will be sent and you will be taken to the dashboard.
- If there's a problem with your registration, you'll receive an error message.

- The controller for this route handles user registration.
- It extracts the user's chosen username, password, and email from the request.
- It attempts to create a new user, and the success or failure of this process is sent with in the response.

### User Login

**Route:** `/login`

**What it does:**

- This is where you log in to your user account.
- To log in, you send a POST request with your username and password.
- If your registration is successful, you'll be logged in, a cookie will be sent and you will be taken to your dashboard.
- If there's an issue with your login, you'll receive an error message.

- The controller for this route manages user login.
- It extracts the user's username and password from the request.
- It checks if the user exists and if the provided credentials are valid. The success or failure of the login attempt is sent with the response

### User Logout

**Route:** `/logout`

**What it does:**

- This is where you log out of your user account.
- It logs you out by ending your current session and clearing your session cookie.
- After logging out, you'll be redirected to the home page.

- To log out, simply access this route. No input is needed.
- You'll be logged out and sent back to the home page.

- The controller for this route is responsible for user logout.
- It destroys the user's current session, logging them out, and clears the session cookie.
- After logging out, the user is redirected to the root page.

### Protected Route

**Route:** `/dashboard`

**What it does:**

- This is a protected route, meaning it's only accessible if you're logged in.
- If you have an active session you'll receive a message confirming your access to the protected route.
- If you're not logged in, you'll receive an error message stating that you can't access the route.

- This route is protected, and you need to be logged in to access it.
- If you're logged in, you'll get a success message; otherwise, you'll receive an error.
- To access this protected route, you must first log in.

- The controller for this route handles access to a protected route.
- It checks if the user is logged in by examining the user's session.
- If the user is logged in, it sends a success message. If not, it sends an error message.
