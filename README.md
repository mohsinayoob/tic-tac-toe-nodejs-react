# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Author: Hafiz Muhammad Mohsin Ayoob
### Prerequisit
Run `yarn` or `npm install before running the project.`
## Available Scripts

In the project directory, you can run:

### `yarn start:dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

For now I am running Server and Client code on same port that's why it does not reload on changes in files.

### `yarn test`

Launches the test runner. Included test cases for back end logic.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### `Game Play`

- "X" represents Player 1 and "O" represents Player 2.
- If an empty array is sent to the server, the computer will be Player 1. Buttons are introduced to become Player One or Two.
- If an array with a single 'X' and 8 empty strings is sent to the server, the computer will be Player 2.
- ### Game is designed so the server never loses a game and will always play the most optimal move.


### `API Docs`

API docs can be accessed on [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
This is implemented using swagger

### `Screenshot`

![Game Screenshot](./screenshot.png)
