import React from 'react';
import { Box, Typography } from '@mui/material';

const SearchResults = ({ loading, error, searchResults }) => {
  return (
    <Box>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color='error'>{error}</Typography>}
      {/* Render search results */}
      {searchResults.length > 0
        ? searchResults.map((exercise) => (
            <div key={exercise.id}>
              <h3>{exercise.name}</h3>
              <p>{exercise.target}</p>
              <p>{exercise.equipment}</p>
              <p>{exercise.bodyPart}</p>
            </div>
          ))
        : !loading && <Typography>No results found</Typography>}
    </Box>
  );
};

export default SearchResults;
