import { useEffect, useState } from "react";

const Game = () => {
    const [all_countries, setCountries] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRandomCountryOne = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch('http://localhost:4000/api');
                if (response.ok) {
                    const json = await response.json();
                    setCountries(json);
                } else {
                    throw new Error('Failed to fetch countries');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRandomCountryOne();
    }, []);

    if (isLoading) {
        return <div>Loading countries...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="game">
            <h2>It's Gaming time <em>baby!</em></h2>
            <div className="countries">
                {all_countries && all_countries.length > 0 ? (
                    all_countries.map((country) => (
                        <p key={country._id}>{country.Country_Area}</p>
                    ))
                ) : (
                    <p>No countries found.</p>
                )}
            </div>
        </div>
    );
};

export default Game;
