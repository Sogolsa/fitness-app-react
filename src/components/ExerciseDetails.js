import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Typography, Stack, Button, Box } from '@mui/material';

const ExerciseDetails = ({ exercises }) => {
  const { id } = useParams();

  const exercise = exercises.find((exercise) => exercise.id === id);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack className='exercise-card'>
        <Typography fontWeight='bold' textTransform='capitalize' padding='5px'>
          {exercise.name}
        </Typography>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Typography padding={'5px'} textTransform='capitalize'>
          <span style={{ fontWeight: 'bold', color: '#8e2d53' }}>
            Body Part:{' '}
          </span>
          {exercise.bodyPart}
        </Typography>
        <Typography padding={'5px'} textTransform='capitalize'>
          <span style={{ fontWeight: 'bold', color: '#8e2d53' }}>
            Target Muscles:{' '}
          </span>
          {exercise.target}
        </Typography>
        <Typography padding={'5px'} textTransform='capitalize'>
          <span style={{ fontWeight: 'bold', color: '#8e2d53' }}>
            Secondary Muscles:{' '}
          </span>
          {exercise.secondaryMuscles}
        </Typography>
        <Typography padding={'5px'} textTransform='capitalize'>
          <span style={{ fontWeight: 'bold', color: '#8e2d53' }}>
            Equipment:{' '}
          </span>
          {exercise.equipment}
        </Typography>
        <Typography padding={'5px'}>
          <span style={{ fontWeight: 'bold', color: '#8e2d53' }}>
            Instructions:
          </span>
          <ol>
            {exercise.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </Typography>
        <Link to={`/exercises`}>
          <Button
            sx={{
              marginTop: '35px',
              background: '#a53860',
              ml: '21px',
              color: '#fff',
              fontSize: '18px',
              borderRadius: '20px',
              textTransform: 'capitalize',
              cursor: 'pointer',
              padding: '10px 20px',
            }}
          >
            Back
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default ExerciseDetails;
