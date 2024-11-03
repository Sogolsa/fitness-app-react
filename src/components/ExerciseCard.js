import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className='exercise-card'
      sx={{ mr: { xs: '20px' } }}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction='row'>
        <Button
          sx={{
            ml: '21px',
            mb: '5px',
            color: '#000',
            background: '#FF7F7F',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
            padding: '3px 20px',
          }}
        >
          Details
        </Button>
        <Button
          sx={{
            ml: '21px',
            mb: '5px',
            color: '#000',
            background: '#66c1b8',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
            padding: '3px 20px',
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml='21px'
        color='#000'
        fontWeight='bold'
        sx={{ fontSize: { lg: '18px', xs: '15px' } }}
        mt='5px'
        pb='10px'
        textTransform='capitalize'
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
