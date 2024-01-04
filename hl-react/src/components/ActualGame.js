// src/components/Game.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ActualGame.css'
import { HigherButton } from "./HigherButton";
import { LowerButton } from "./LowerButton";
import Earth from './Earth'

const ACTUAL_GAME = () => {
    // State for storing two countries to compare
    const [countryOne, setCountryOne] = useState(null);
    const [countryTwo, setCountryTwo] = useState(null);
    // State for current score and high score
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    // State to track whether the game is showing the "Game Over" screen
    const [showGameOver, setShowGameOver] = useState(false);

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
            // Show game over screen
            setShowGameOver(true);

            // After a delay, reset the game
            setTimeout(() => {
                setShowGameOver(false); // Hide the game over screen
                setScore(0); // Reset score
                fetchRandomCountries(); // Fetch new countries
            }, 5000); // Delay in milliseconds (3 seconds)
        }
    };

    // Render the game UI
    return (
        <div className="game">
            <div className='game-ui'>
            {showGameOver ? (
                // Display the Game Over screen
                <div>
                    <h2>Game Over!</h2>
                    <p>Your final score was: {score}</p>
                    <p>High Score: {highScore}</p>
                </div>
            ) : (
                // Display the game if not showing the Game Over screen
                countryOne && countryTwo && (
                    <>
                    <div className="frame">
                            <div className="div-2">
                                <div className="country-b">
                                {countryOne.Country_Area}<br />
                                    <br />
                                    {countryOne.Formatted}
                                </div>
                                <div className="text-wrapper-2">{countryTwo.Country_Area}</div>
                                <div className="text-wrapper-4">Score: {score}</div>
                                <div className="overlap-group">
                                    <div className="text-wrapper-3">Higher Lower GDP</div>
                                    <img className="logo-arrow" alt="Logo arrow" src="./Arrow_down.svg" />
                                    <img className="logo-arrow-2" alt="Logo arrow" src="./Arrow_up.svg" />
                                </div>
                                <HigherButton
                                    onClick={() => handleGuess('higher')}
                                    arrow="arrow-1-4.svg"
                                    arrowClassName="design-component-instance-node"
                                    className="higher-button-instance"
                                    states="inactive" />
                                <LowerButton 
                                    onClick={() => handleGuess('lower')}
                                    arrow="arrow-1-5.svg"
                                    className="lower-button-instance" 
                                    states="inactive" />
                            </div>
                        </div>
                        {/* <div>
                            <h2>Compare GDPs</h2>
                            <p>{countryOne.Country_Area}: {countryOne.Formatted}</p>
                            <p>VS</p>
                            <p>{countryTwo.Country_Area}</p>
                            <HigherButton onClick={() => handleGuess('higher')} />
                            <LowerButton onClick={() => handleGuess('lower')} />
                        </div> */}
                    </>
                )
            )}
            {/* <p>Current Score: {score}</p>
            <p>High Score: {highScore}</p> */}
            </div>
        </div>
    );
};

export default ACTUAL_GAME;
