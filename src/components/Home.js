import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';

import HeroBanner from './HeroBanner';
import NavigationBar from './NavigationBar';
import SearchResults from './SearchResults';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(''); // User's search input
  const [searchResults, setSearchResults] = useState([]); // Results from API search
  const [error, setError] = useState(''); // error messages from failed API requests.
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_RAPID_API_KEY; // Access API key from environment variables
  const API_URL = 'https://exercisedb.p.rapidapi.com';

  const resultsRef = useRef(null); // Creating a ref for the search results

  const authorizationOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    },
  };

  const handleSearch = async () => {
    if (searchQuery) {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(
          `${API_URL}/exercises`,
          authorizationOptions
        );

        // Access data from response
        const exercises = response.data;

        const filteredExercises = exercises.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exercise.equipment
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            exercise.bodyPart
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            exercise.target.toLowerCase().includes(searchQuery.toLowerCase())
        );
        // Clear the search once your done
        setSearchQuery('');
        setSearchResults(filteredExercises);

        // Scroll to the results section
        if (resultsRef.current) {
          resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        console.log('searched exercises', filteredExercises);
      } catch (error) {
        setError('An error occurred while fetching data.');
        console.log('Search Error:', error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <Box>
      <NavigationBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <HeroBanner />
      <Box ref={resultsRef}>
        <SearchResults
          searchResults={searchResults}
          loading={loading}
          error={error}
        />
      </Box>
    </Box>
  );
};

export default Home;
