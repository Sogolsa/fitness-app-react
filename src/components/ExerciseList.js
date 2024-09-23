import React, { useState, useEffect } from 'react';
import { Stack, Typography, Box } from '@mui/material';

import NavigationBar from './NavigationBar';
import ExerciseCard from './ExerciseCard';
import SearchResults from './SearchResults';

import { fetchExercises, authorizationOptions } from '../utils/api';

const ExerciseList = ({
  setLoading,
  setSearchPerformed,
  searchResults,
  searchPerformed,
  loading,
  error,
  setExercises,
  exercises,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage, setExercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExerciseData = async () => {
      setLoading(true);
      setSearchPerformed(true);

      try {
        const exerciseData = await fetchExercises(
          'https://exercisedb.p.rapidapi.com/exercises',
          authorizationOptions
        );
        setExercises(exerciseData);
      } catch (err) {
        console.error('Failed to fetch exercises', err);
      } finally {
        setLoading(false);
      }
    };
    fetchExerciseData();
  }, [setLoading, setSearchPerformed, setExercises]);

  return (
    <Box>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color='error'>{error}</Typography>}
      {!loading && searchPerformed && exercises.length === 0 && (
        <Typography>No results found</Typography>
      )}

      {/* Render search results */}
      <Stack
        direction='row'
        spacing={2}
        flexWrap='wrap'
        justifyContent='flex-start'
      >
        {exercises &&
          exercises.length > 0 && //ensure searchResults is not null
          exercises.map((exercise) => (
            <Box>
              <ExerciseCard key={exercise.id} exercise={exercise} />
            </Box>
          ))}
      </Stack>
    </Box>
  );
};

export default ExerciseList;
