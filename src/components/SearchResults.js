import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import ExerciseCard from './ExerciseCard';

const SearchResults = ({ loading, error, searchResults, searchPerformed }) => {
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
        {searchResults.length > 0 &&
          searchResults.map((exercise) => (
            <Box key={exercise.id}>
              <ExerciseCard key={exercise.id} exercise={exercise} />
            </Box>
          ))}
      </Stack>
    </Box>
  );
};

export default SearchResults;
