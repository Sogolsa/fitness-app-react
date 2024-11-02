import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAPID_API_KEY; // Access API key from environment variables
const API_URL = 'https://exercisedb.p.rapidapi.com';
// Changing the api
// const API_URL = 'https://exercise-db-fitness-workout-gym.p.rapidapi.com';

export const authorizationOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchExercises = async (url, options) => {
  try {
    // Making the request using axios
    const response = await axios.get(url, options);
    console.log('Fetch success, status:', response.status);
    return response.data; // Return data from response
  } catch (error) {
    console.error(
      'Error fetching exercises:',
      error.response?.data || error.message
    );

    throw new Error(`Failed to fetch exercises: ${error.message}`);
  }
};
