import React from 'react';
import { Box, TextField, Stack, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

const SearchInput = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <Stack
      backgroundColor='#000'
      direction='row'
      alignItems='center'
      justifyContent='center'
      sx={{
        // height: { xs: '80%' },
        ml: { lg: '30px', xs: '50px' },
        gap: { lg: '20px', xs: '3px' },
      }}
    >
      <Typography
        sx={{
          fontWeight: { lg: '600px', xs: '300px' },
          fontSize: { lg: '20px', xs: '10px' },
          display: { xs: 'none', lg: 'flex' },
        }}
      >
        Search For Exercises:
      </Typography>
      <Box position='relative' sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          id='outlined-basic'
          variant='outlined'
          placeholder='Search exercises...'
          value={searchQuery} // TextField controlled by the state
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
          sx={{
            input: {
              fontWeight: { lg: '500', xs: '300' },
              fontSize: { lg: '20px', xs: '12px' },
              border: 'none',
              borderRadius: '4px',
              padding: { lg: '10px', xs: '8px' },
              maxWidth: { xs: 'auto' },
            },
            width: { lg: '400px', xs: 'auto' },
            fieldset: {
              border: 'none',
            },
            backgroundColor: '#fff',
            borderRadius: '4px',
            height: { lg: '50px', xs: '30px' },
          }}
        />
        <Button
          sx={{
            right: 0,
            position: { lg: 'absolute', xs: 'relative' },
            color: 'white',
            backgroundColor: '#a53860',
            height: { lg: '50px', xs: '30px' },
            width: { lg: '100px', xs: 'auto' },
            maxWidth: { xs: 'auto' },
            fontSize: { lg: '20px', xs: '12px' },
            // px: '16px',
            textTransform: 'none',
            // border: '2px solid #a53860',
            borderRadius: '4px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchInput;
