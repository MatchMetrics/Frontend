// src/pages/LeaguesPage.js
import React, { useEffect, useState } from 'react';
import { fetchLeagues } from '../api/leagues'; // Import the API function

const LeaguesPage = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        const loadLeagues = async () => {
            try {
                const leaguesData = await fetchLeagues();
                setLeagues(leaguesData);
            } catch (error) {
                console.error('Failed to load leagues:', error);
            }
        };

        loadLeagues(); // Fetch leagues when component mounts
    }, []);

    return (
        <div>
            <h1>Leagues</h1>
            <ul>
                {leagues.map(league => (
                    <li key={league.id}>{league.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default LeaguesPage;
