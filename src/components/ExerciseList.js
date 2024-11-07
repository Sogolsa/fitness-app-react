import React, { useEffect } from 'react';
import { Stack, Typography, Box, Pagination } from '@mui/material';

import ExerciseCard from './ExerciseCard';

import { fetchExercises, authorizationOptions } from '../utils/api';

const ExerciseList = ({
  setLoading,
  setSearchPerformed,
  searchPerformed,
  setSearchResults,
  loading,
  error,
  setExercises,
  exercises,
  currentPage,
  setCurrentPage,
  exercisesPerPage,
}) => {
  useEffect(() => {
    const fetchExerciseData = async () => {
      setLoading(true);
      setSearchPerformed(true);
      // setSearchResults([]); // Clear previous search results

      try {
        const exerciseData = await fetchExercises(
          'https://exercisedb.p.rapidapi.com/exercises?limit=0',
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
      <Box display='flex' justifyContent='center' mt={4}>
        <Pagination
          count={Math.ceil(exercises.length / exercisesPerPage)} // total pages
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          shape='rounded'
          defaultPage={1}
        />
      </Box>
    </Box>
  );
};

export default ExerciseList;
