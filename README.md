# Vegan Restaurants App

> Vegan Restaurant Finder built with the MERN stack.

![screenshot](https://github.com/ahronlu/vf/screenshop.png)

## Features

- List all vegan restaurants
- Search and filter restaurant by name

### Env Variables

Create a .env file in then root and add the following

```
mongoURI = your mongodb uri
```

### Install Dependencies (frontend & backend)

```
npm install
cd client
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Backend

Build with:

express.js a node.js framework
mongoose which is elegant mongodb object modeling for node.js
the servers connets to MongoDB Atlas, a cloud Database

### Backend

Build with:

React.js using react-hooks and functional components
Material UI a React UI frameword

When the app runs you will find a a navbar at the top and a button "Load Restaurants" in the middle of the page,
when user clicks the button, the app fetches the restaurants list from the server and the button changes his labbel to "Loading Restaurants", by the end of the loading of the list, it will show each restaurant's name, address and description.
The user can search and filter the restaurants by name, at right side of the navbar.
For handling loading state the i'm using react-hook useState, for the filter ands search i also use useState the each changing of the search input will change the query's state, then the app will conditianally will show the restaurants if the query chars match any chars of the restaurant name, by the javascript string method includes().

### Restaurant List Route

http://localhost:5000/getRestaurantList

### Seed Database

You can use the following commands to seed the database with the restaurants as well as destroy all of them

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

(I've changed the key "restaurant_name" with just "name")

Aharon Lubitsch https://ahronlu.com
