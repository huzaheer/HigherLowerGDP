# Higher or Lower GDP Game

## Inspiration
This game was born out of a college pastime that my friends and I engaged in to broaden our geopolitical knowledge in a fun and interactive way. We would challenge each other to guess which countries had higher or lower GDPs, sparking discussions and a deeper understanding of global economics and geography. Below is a quick demonstration of the game.


## Project Overview
The Higher or Lower GDP Game is a dynamic, educational web application that combines data visualization and gaming to create an engaging way to learn about the world's economies. The core gameplay revolves around comparing the GDPs of two countries and guessing which one is higher or lower.

## Data Scraping and Database
The GDP data was gathered using the BeautifulSoup library in Python, scraping reliable sources to ensure the information's accuracy and relevance. After cleansing and formatting in Excel, the data was imported into a MongoDB database hosted on Atlas.

## Server and API
A Node.js server was established to manage the data, with multiple API endpoints designed to handle GET, POST, DELETE, and UPDATE requests. This backend system serves as the data backbone for the game, allowing for real-time interactions and updates.

## Frontend Development
The frontend was developed using React, leveraging hooks like `useEffect` and `useState` to create a dynamic and responsive user interface. The frontend smoothly updates to reflect real-time gameplay and data changes.

## 3D Modeling and Rendering
An interactive, low-poly Earth model, complete with animations, was crafted in Blender. This model was then brought to life in the web application using the Three.js library, providing an immersive visual context for the GDP data.

## Design and Animation
Figma was utilized for additional animations, stylistic, and color choices, bringing a cohesive and attractive design language to the game. These design elements enhance the user experience and make the gameplay both enjoyable and educational.

## Getting Started
To run this project locally, clone the repository and follow the instructions below:

1. Open two Terminals:
2. Terminal 1:
  ```bash
  cd hl-server    //cd into server
  npm install     //install dependencies
  npm run dev
  ```

3. Terminal 2:
  ```bash
  cd hl-react     //cd into react
  npm install     // install dependences
  npm start
  ```

3. Navigate to `localhost:3000` in your browser to play the game.

## Contributions
Contributions are welcome! If you have suggestions or want to contribute to the codebase, please feel free to create an issue or a pull request.
