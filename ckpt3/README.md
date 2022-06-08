# Checkpoint 3

Container for checkpoint 3. Containers are network agnostic and can be run in any "host".


## Goal
Now the animal shelter construction is finished and can have multiple Dogs and Cats. Starting with an empty collection of animals, users should be able to append any number of animals. Keep in mind that this collection should be collaborative as well! 

Make sure that it’s possible for the animal shelter staff to update the `name`, `height`, and characteristics of individual animals (e.g., `obedience` and `purrs`). 

Now that we have multiple animals stored in our app, we would like the DOM to be updated appropriately. For example, when the animal shelter staff change the index they are looking at (flipping page), you should update the DOM.

Please demonstrate to the researcher that users can add at least 3 animals to the list.

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
