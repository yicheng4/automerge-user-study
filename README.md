# User Experience Study for Collabs
## Background
The Pittsburgh animal shelter wants to develop a system to keep track of the different animals that they have. They are asking for you to develop a program that will let the staff collaboratively manage the animals.

The application is a web page that allows clients to update the same state concurrently on different devices. We’d like to have a list of animals, each of which has different attributes. There are two kinds of animals – cats and dogs. Users should be able to add and edit individual animals. The app does not allow users to add new kinds of animals.

You have an HTML document and a sketch of how this might work in Typescript, but the part of the code that takes care of collaboration is not yet implemented. You must complete this program so that animals can be collaboratively added and edited. Users can access the animals stored in the app just like editing Google Docs so that multiple people can access and edit them at the same time.


## What to do
For this task, you'll need to do the following:  
- Implement the collaboration functionality in the template provided.  
- Run the web page and ensure that different users can add/edit individual animals concurrently.
 
To assist you in this task, we've provided you with simplified instructions for launching the app using the Automerge library. If you have any questions, please ask researchers.
## Task

The following instructions indicate the steps that need to be followed to complete the task:

- Download the template code.  
- Implement the collaboration functionality in the template provided.  
- Launch the collaborative app and ensure that different users can add/edit individual animals concurrently.

In the following paragraphs, we describe each step in detail and, in some steps, we provide commands that you need to execute to complete that step. 
### Download and install the template code.  
  ```
  $ git clone https://github.com/yicheng4/automerge-user-study.git
  $ cd automerge-user-study/ckpt1
  $ npm i
  $ cd ../ckpt2
  $ npm i
  $ cd ../ckpt3
  $ npm i
  ```
 The files you will work on are `ckpt1/src/site/app.ts`,  `ckpt2/src/site/app.ts`, and
 `ckpt3/src/site/app.ts`.


### Implement the collaboration functionality in the template provided.
You can refer to the [project documentation](https://automerge.org/). If you have any questions, please feel free to ask the researcher.   

While working, you can test the code you have written so far by following the instructions [below](#launch-the-collaborative-website). Checking the console would help you to debug. 

When you finish a checkpoint, please let the researcher know. If you are planning to start writing code, please describe to the researcher the approach that you’d like to take before you get started.  


#### Checkpoint1:

To begin, we need a data structure representing the animal that we’d like for our app to store, of course using the `automerge` package. So start by defining a data structure that would model one instance of an animal, and which is able to construct all of the fields you believe will be required for each animal.

Once this data structure representing the animal is defined, you can add it to the application by instantiating it and manipulating it inside of `async function ()`. Here, we would like to collect user inputs from the HTML form and update the states of the animal. Finally, in order for the user to see these updates, we must display these fields in the DOM. Note updates must be visible in the DOM whether the updates are made in the local replica or if updates come in from remote replicas.

Please create the appropriate automerge `doc`s and fill in the TODOs in `ckpt1/src/site/app.ts`  so that the animal’s `name` (i.e. Alice, Bob) and `height` (i.e. 5 inches) can be collaboratively edited. That way, the animal shelter staff can edit them on different devices!
At checkpoint1, we only have one animal and the animal shelter staff should be able to update its `name` and `height`.


#### Checkpoint2:
We now have two kinds of animals in the animal shelter, Dog and Cat.

The Dog has an `obedience` value with the type `DogObedience` (defined in the code we provided) and Cat has a purrs value which is a `Boolean`. We’d like the animal’s name (i.e. Alice, Bob) and height (i.e. 5 inches), and the characteristics of Dog or Cat (like `obedience` and `purrs`) to be collaboratively editable so that the animal shelter staff can edit them on different devices!

Although there are two types of animals, the animal shelter can only have one animal at a time for checkpoint2 (because the shelter is still under construction). The users can collaboratively change the animal name, its type (whether it is a Dog or Cat), and its characteristics (like `obedience` and `purrs`).


#### Checkpoint3:
Now the animal shelter construction is finished and can have multiple Dogs and Cats. Starting with an empty collection of animals, users should be able to append any number of animals. Keep in mind that this collection should be collaborative as well! 

Make sure that it’s possible for the animal shelter staff to update the `name`, `height`, and characteristics of individual animals (e.g., `obedience` and `purrs`). 

Now that we have multiple animals stored in our app, we would like the DOM to be updated appropriately. For example, when the animal shelter staff change the index they are looking at (flipping page), you should update the DOM.

Please demonstrate to the researcher that users can add at least 3 animals to the list.


### Launch the collaborative website
  `cd` into `ckpt1/` or (`ckpt2/` or `ckpt3/`)  
  `$ npm run dev`  
  `$ npm start`  

Open the website shown in the command line. You can test it in multiple tabs/windows to see if you can use it collaboratively.
### Clean up (Optional)
If you'd like to clean up the packages:  
`cd` into the checkpoint folders  
`$ npm run clean`  

