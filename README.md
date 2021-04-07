# Schooly

## Basic idea
Schooly is a MERN stack web application intended for students to find help regarding school problems.

## Client
The client is written in ReactJS, using SASS for styling, Firebase for authentication and Redux for state management.

The different routes are described in the App.js component.
There are 2 HOCs - PrivateRoute and PublicRoute, which serve as route guards.

The home page is accessible by both authenticated and not authenticated users, but to open a question details page the user must login into an existing account or create a new one. This can be done from the Login and Register pages.

When authenticated the user can ask their own question on the /ask route. After posting a question the user is redirected to its details page.

On the details page the user can see the title and content of the question, as well as the grade and subject regarding it. Extra info as author username and creation date is also visible.

The user can manage their own questions: edit and delete them. Another user's questions can be marked as favorite. Each question has its own comment section.

## Setup locally
You need to open a terminal in the server folder and run:
```
npm install
npm run dev
```
to run the Express server.

You need to open a terminal in the client folder and run:
```
npm install
npm start
```
to run the React client.

