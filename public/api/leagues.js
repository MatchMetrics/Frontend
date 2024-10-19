// src/api/leagues.js
const API_URL = process.env.REACT_APP_API_URL; // Use process.env to access environment variables
export async function fetchLeagues() {
    try {
        const response = await fetch(`${API_URL}/api/leagues`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const leagues = await response.json();
        return leagues.data; // Return leagues from the 'data' property of the API response
    } catch (error) {
        console.error('Error while fetching leagues:', error);
        throw error;
    }
}