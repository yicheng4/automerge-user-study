# Checkpoint 2

Container for checkpoint 2. Containers are network agnostic and can be run in any "host".


## Goal
We now have two kinds of animals in the animal shelter, Dog and Cat.

The Dog has an `obedience` value with the type `DogObedience` (defined in the code we provided) and Cat has a purrs value which is a `Boolean`. We’d like the animal’s name (i.e. Alice, Bob) and height (i.e. 5 inches), and the characteristics of Dog or Cat (like `obedience` and `purrs`) to be collaboratively editable so that the animal shelter staff can edit them on different devices!

Although there are two types of animals, the animal shelter can only have one animal at a time for checkpoint2 (because the shelter is still under construction). The users can collaboratively change the animal name, its type (whether it is a Dog or Cat), and its characteristics (like `obedience` and `purrs`).

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

