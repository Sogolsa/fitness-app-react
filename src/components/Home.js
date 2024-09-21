import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';

import HeroBanner from './HeroBanner';
import NavigationBar from './NavigationBar';
import SearchResults from './SearchResults';
import { authorizationOptions, fetchExercises } from '../utils/api';

const Home = () => {
  const API_URL = 'https://exercisedb.p.rapidapi.com';

  const [exercises, setExercises] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // User's search input
  const [searchResults, setSearchResults] = useState([]); // Results from API search
  const [error, setError] = useState(''); // error messages from failed API requests.
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const resultsRef = useRef(null); // Creating a ref for the search results

  const handleExplore = async () => {
    setLoading(true);
    setSearchPerformed(true);
    const exercises = await fetchExercises(
      `${API_URL}/exercises?limit=100&offset=0`,
      authorizationOptions
    );
    setExercises(exercises);
    setSearchResults(exercises);
    setLoading(false);
    console.log('All exercises', exercises);

    // Scroll to the results section
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = async () => {
    if (searchQuery) {
      setLoading(true);
      setError('');
      setSearchPerformed(true);

      try {
        const exercises = await fetchExercises(
          `${API_URL}/exercises`,
          authorizationOptions
        );

        // Filter exercises based on search query
        const filteredExercises = searchQuery
          ? exercises.filter(
              (exercise) =>
                exercise.name
                  .toLowerCase()
                  .trim()
                  .includes(searchQuery.toLowerCase().trim()) ||
                exercise.equipment
                  .toLowerCase()
                  .trim()
                  .includes(searchQuery.toLowerCase().trim()) ||
                exercise.bodyPart
                  .toLowerCase()
                  .trim()
                  .includes(searchQuery.toLowerCase().trim()) ||
                exercise.target
                  .toLowerCase()
                  .trim()
                  .includes(searchQuery.toLowerCase().trim())
            )
          : exercises;

        // Clear the search once your done
        setSearchQuery('');
        setSearchResults(filteredExercises);

        console.log('searched exercises', filteredExercises);

        // Scroll to the results section
        if (resultsRef.current) {
          resultsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
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
      <HeroBanner handleExplore={handleExplore} />
      <Box ref={resultsRef}>
        <SearchResults
          searchResults={searchResults}
          loading={loading}
          error={error}
          searchPerformed={searchPerformed}
        />
      </Box>
    </Box>
  );
};

export default Home;
