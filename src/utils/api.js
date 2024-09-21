import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAPID_API_KEY; // Access API key from environment variables
const API_URL = 'https://exercisedb.p.rapidapi.com';

export const authorizationOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchExercises = async (url, options) => {
  try {
    // Making the request using axios
    const response = await axios.get(url, options);
    return response.data; // Return data from response
  } catch (error) {
    throw new Error('Failed to fetch exercises');
  }
};
