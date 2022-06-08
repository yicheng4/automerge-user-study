# Checkpoint 1

Container for checkpoint 1. Containers are network agnostic and can be run in any "host".

## Goal
To begin, we need a data structure representing the animal that we’d like for our app to store, of course using the `automerge` package. So start by defining a class that would model one instance of an animal, and which is able to construct all of the fields you believe will be required for each animal.

Once this class representing the animal is defined, you can add it to the application by instantiating it and manipulating it inside of `async function ()`. Here, we would like to collect user inputs from the HTML form and update the states of the animal. Finally, in order for the user to see these updates, we must display these fields in the DOM. Note updates must be visible in the DOM whether the updates are made in the local replica or if updates come in from remote replicas.

Please create the appropriate automerge `doc`s and fill in the TODOs in `ckpt1/src/site/app.ts`  so that the animal’s `name` (i.e. Alice, Bob) and `height` (i.e. 5 inches) can be collaboratively edited. That way, the animal shelter staff can edit them on different devices!
At checkpoint1, we only have one animal and the animal shelter staff should be able to update its `name` and `height`.

## Installation

First, install [Node.js](https://nodejs.org/). Then run `npm i`.

## Commands

### `npm run dev`

Build the container from `src/`, in [development mode](https://webpack.js.org/guides/development/).

### `npm start`

Run the testing server. Open [http://localhost:3000/](http://localhost:3000/) to view your container. Use multiple browser windows at once to test collaboration.

See [container-testing-server](https://www.npmjs.com/package/@collabs/container-testing-server) for usage info.

### `npm run clean`

Delete `dist/`.

## Starter Files

- `src/`: Client-side app source files. This will be files you will be working on. Please do not rename the file names.
- `webpack.config.ts`: Webpack config for the client-side app (**you do not need to change this**).
- `tsconfig.json`: TypeScript config for the client-side app (**you do not need to change this**).

