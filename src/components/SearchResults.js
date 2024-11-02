import React from 'react';
import { Box, Typography, Stack, Pagination } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const SearchResults = ({
  loading,
  error,
  searchResults,
  searchPerformed,
  exercisesPerPage,
  currentPage,
  setCurrentPage,
}) => {
  // Calculate the current exercises to show based on pagination
  const lastExerciseIndex = currentPage * exercisesPerPage;
  const firstExerciseIndex = lastExerciseIndex - exercisesPerPage;
  const currentExercises = searchResults.slice(
    firstExerciseIndex,
    lastExerciseIndex
  );

  return (
    <Box>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color='error'>{error}</Typography>}
      {!loading && searchPerformed && searchResults.length === 0 && (
        <Typography>No results found</Typography>
      )}

      {/* Render search results */}
      <Stack
        direction='row'
        spacing={2}
        flexWrap='wrap'
        justifyContent='flex-start'
      >
        {currentExercises &&
          currentExercises.length > 0 && //ensure searchResults is not null
          currentExercises.map((exercise) => (
            <Box>
              <ExerciseCard key={exercise.id} exercise={exercise} />
            </Box>
          ))}
      </Stack>
      <Box display='flex' justifyContent='center' mt={4}>
        <Pagination
          count={Math.ceil(searchResults.length / exercisesPerPage)} // total pages
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          shape='rounded'
          defaultPage={1}
        />
      </Box>
    </Box>
  );
};

export default SearchResults;
