# Board Game Bartender - Stretch Tech Project by Michele Comfort, Joan Rasmussen and Colgan Meanor
Mod3 2108 FE

## Table of Contents
  - [Install + Setup](#set-up)  
  - [Abstract](#abstract)
  - [Architecture](#architecture)
  - [Technologies](#technologies)
  - [Contributors](#contributors)
  - [Wins](#wins)
  - [Challenges + Improvements](#challenges-+-Improvements)
  - [Project Specs](#project-specs)

## Install + Setup
  - clone this repo: [here](https://github.com/colganmeanor/Board-Game-Bartender)
   - On the command line, type: **$ npm install**
   - On the command line, type: **$ npm start**
   - The app will run on port 3000.
   - Visit (http://localhost:3000/) in your browser. 

## Project Specs
   - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html)


## Abstract

  Board Game Bartender is a web application designed to help suggest cocktails for game nights with friends. The app makes use of two public APIs ([Board Game Atlas](https://www.boardgameatlas.com/api/docs/) and [TheCocktailDB](https://www.thecocktaildb.com/api.php)) that allow the user to search for their desired Game, and choose a liquor type. Once these choices have been made, the user can click a 'Pair' button on the page to be shown a random cocktail made from their liquor of choice, along with ingredients required to make the cocktail. In addition to discovering unique and new cocktails, the app also allows the user to save their favorite drinks and view them again on the 'Favorites' page. 

## Architecture

  As mentioned above, the data necessary for Board Game Bartender comes from the following APIs: [Board Game Atlas](https://www.boardgameatlas.com/api/docs/) and [TheCocktailDB](https://www.thecocktaildb.com/api.php). Our application takes advantage of React Redux's Global State Management tools to store the data fetched from our APIs and distribute it accordingly to the necessary components. 

  On page load, the game data is fetched and stored in the global state. When the user is selecting their liquor of choice, the application is performing initial fetch calls in preparation of providing a unique cocktail to the user. Once the user has selected their choice of liquor and game and clicks the 'Pair' button, the application looks through a list of fetched drinks that match the liquor type chosen by the user and randomly selects the cocktail it will show to the user. 
  
  While loading the paired game and cocktail result page, the application performs one more series of fetch calls to make sure that it has the full information necessary for the chosen game and cocktail, such as recommended players and playtime for the game, and ingredients for the cocktail, which all get displayed on the page. The application also takes advantage of Redux's store to allow a user to save and remove cocktails to a favorite's page.


## Technologies
  - React Framework
  - React Router
  - React Redux
  - Cypress Testing Framework
  - Javascript
  - CSS HTML
  - VSCode
  - Git Version Control / GitHub
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line


## Contributors
  - [Michele Comfort](https://github.com/michelecomfort)
  - [Joan Rasmussen](https://github.com/raz-joan)
  - [Colgan Meanor](https://github.com/colganmeanor)


## Wins
  - Successfully conceptualized and designed the entire application from idea/planning stage to completion. 
  - Successfully built a React based application that utilizes Redux
  - Successfully managed data in Redux Store from two different API endpoints. 
  - Tons of shared knowledge opportunities with this group in regards to best practices with GitHub, VSCode, Figma, and everything in between.
  - Application meets the MVP functionality we originally set out to meet. 
  - Beautiful and responsive layout for the application. 
  
  

## Challenges + Improvements
  - Coming up with application ideas is difficult! It took us a lot longer than we imagined it would to come up with our own idea (and to find the perfect publicly available APIs).
  - We had some difficulty when it came to implementing Router with our previously implemented asynchronous javascript fetch calls and functions that organized our data. It felt like a real blocker for the few hours that we worked on it. After taking the night to think about it, we came in fresh the next morning and were able to implement a solution for our issues within an hour of our team standup. It felt like a huge win after a big challenge. Sometimes you just have to walk away from the code for the night.
  - Learning Redux was a challenge for this group. But it was exciting to get to learn from each other, and support our learning of global state management working together on the project. 
  - There are always compromises when building an application in such a short time table. As always, the application starts out more ambitious than it ends up being. We had tons of ideas that didn't make it into the final product, but would always be cool to revisit later. It's important to know when to make those calls, and we felt like we made good calls along the way to deliver our MVP.
