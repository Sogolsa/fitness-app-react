import React from 'react';
import { Stack, Button } from '@mui/material';

const Pagination = ({ totalExercises, exercisesPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalExercises / exercisesPerPage); i++) {
    pages.push(i);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Stack
      direction='row'
      flexWrap='wrap'
      sx={{ mt: { lg: '114px', xs: '70px' } }}
      alignItems='center'
    >
      {pages.map((page, index) => {
        return (
          <Button
            color='standard'
            // shape='rounded'
            // padding='10px'
            // defaultPage={1}
            // size='large'
            key={index}
            onClick={() => {
              handlePageChange(page);
            }}
          >
            {page}
          </Button>
        );
      })}
    </Stack>
  );
};

export default Pagination;
