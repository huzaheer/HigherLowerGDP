// src/components/Game.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ACTUAL_GAME = () => {
    // State for storing two countries to compare
    const [countryOne, setCountryOne] = useState(null);
    const [countryTwo, setCountryTwo] = useState(null);
    // State for current score and high score
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    function getRandomNumber() {
        return Math.floor(Math.random() * 242) + 1;
    }

    // Function to fetch two random countries from your API
    const fetchRandomCountries = async () => {

        try {
            const responseOne = await axios.get(`http://localhost:4000/api/GDP/${getRandomNumber()}`);
            const responseTwo = await axios.get(`http://localhost:4000/api/GDP/${getRandomNumber()}`);

            console.log(responseOne.data[0])

            setCountryOne(responseOne.data[0]);
            setCountryTwo(responseTwo.data[0]);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    // useEffect hook to fetch countries when the component mounts
    useEffect(() => {
        fetchRandomCountries();
    }, []);

    // useEffect hook to update high score when score updates
    useEffect(() => {
        if (score > highScore) {
            setHighScore(score);
        }
    }, [score]);

    const gameloop = async () => {
        setCountryOne(countryTwo);
        const responseTwo = await axios.get(`http://localhost:4000/api/GDP/${getRandomNumber()}`);
        setCountryTwo(responseTwo.data[0]);
    }

    // Function to handle the user's guess
    const handleGuess = (guess) => {
        // Ensure we have both countries to compare
        if (!countryOne || !countryTwo) return;

        // Determine if the guess is correct
        const isCorrect = (guess === 'higher' && countryTwo.INT_GDP > countryOne.INT_GDP) ||
                          (guess === 'lower' && countryTwo.INT_GDP < countryOne.INT_GDP);

        if (isCorrect) {
            // Increment score and fetch new countries
            setScore(prevScore => prevScore + 1);
            gameloop();
        } else {
            // Update high score if necessary and reset current score
            setScore(0);
            // Optionally, fetch new countries or show a game over message
            fetchRandomCountries(); // Or show game over
        }
    };

    // Render the game UI
    return (
        <div className="game">
            <h2>Compare GDPs</h2>
            {countryOne && countryTwo && (
                <div>
                    <p>{countryOne.Country_Area}: {countryOne.Formatted}</p>
                    <p>VS</p>
                    <p>{countryTwo.Country_Area}</p>
                    <button onClick={() => handleGuess('higher')}>Higher</button>
                    <button onClick={() => handleGuess('lower')}>Lower</button>
                </div>
            )}
            <p>Current Score: {score}</p>
            <p>High Score: {highScore}</p>
        </div>
    );
};

export default ACTUAL_GAME;
