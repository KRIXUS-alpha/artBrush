## Table of Contents

- [Updating to New Releases](#updating-to-new-releases)
- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run backend](#npm-run-backend)
  - [npm run frontend](#npm-run-frontend)
  - [npm run dev](#npm-run-dev)
- [Tech Stack](#tech-stack)
  -[mongodb](#mongodb)
  -[node.js](#node.js)
  -[express.js](#express)
- [Libraries](#libraries)



## Updating to New Releases

Create React App is divided into two packages:

- `create-react-app` is a global command-line utility that you use to create new projects.
- `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.

## Sending Feedback

We are always open to [your feedback](https://github.com/facebookincubator/create-react-app/issues).

## Folder Structure

After creation, your project should look like this:

```
client/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    compontents/
    _actions/
    -reducers/
    App.css
    App.js
    App.test.js
    index.css
    index.js
server/
  config/
  middleware/
  routes/
  models/
  index.js
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run frontend`

Runs the client package.

### `npm run backend`

Runs the server package.

### `npm run dev`

Runs the client and server package concurrently in dev environment.

## Tech Stack
### MongoDB

Documentation -> https://docs.mongodb.com/

### Node.js

Documentation -> https://nodejs.org/en/docs/

### Express.js

Documentation -> https://expressjs.com/en/guide/routing.html


## Libraries

### bcrypt

GIT & Documentation -> https://github.com/kelektiv/node.bcrypt.js/

### body-parser

GIT & Documentation -> https://github.com/expressjs/body-parser

### cookie-parser

GIT & Documentation -> https://github.com/expressjs/cookie-parser

### cors

GIT & Documentation -> https://github.com/expressjs/cors

### jsonwebtoken

GIT & Documentation -> https://github.com/auth0/node-jsonwebtoken

### redux

GIT & Documentation -> https://github.com/reduxjs/redux

### socket.io

GIT & Documentation -> https://github.com/socketio/socket.io

### moment

GIT & Documentation -> https://github.com/moment/moment

### multer

GIT & Documentation -> https://github.com/expressjs/multer



