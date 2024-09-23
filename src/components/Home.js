import React, { useState, useRef } from 'react';
import { Box } from '@mui/material';

import HeroBanner from './HeroBanner';
import NavigationBar from './NavigationBar';
import SearchResults from './SearchResults';
import ExerciseList from './ExerciseList';
import { authorizationOptions, fetchExercises } from '../utils/api';
import { Routes, Route, useNavigate } from 'react-router-dom';

const Home = () => {
  const API_URL = 'https://exercisedb.p.rapidapi.com';
  const navigate = useNavigate();

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
    navigate('/search');

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

        navigate('/search');

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
      <Routes>
        <Route
          path='/'
          element={<HeroBanner handleExplore={handleExplore} />}
        />
        <Route
          path='/exercises'
          element={
            <ExerciseList
              setLoading={setLoading}
              setSearchPerformed={setSearchPerformed}
              setExercises={setExercises}
              exercises={exercises}
            />
          }
        />
        <Route
          path='/search'
          element={
            <SearchResults
              searchResults={searchResults}
              loading={loading}
              error={error}
              searchPerformed={searchPerformed}
            />
          }
        />
      </Routes>

      {/* <Box ref={resultsRef}>
        <SearchResults
          searchResults={searchResults}
          loading={loading}
          error={error}
          searchPerformed={searchPerformed}
        />
      </Box> */}
    </Box>
  );
};

export default Home;
