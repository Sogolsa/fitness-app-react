import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { Typography, Stack, Button } from '@mui/material';

const ExerciseDetails = ({ exercises }) => {
  const { id } = useParams();

  const exercise = exercises.find((exercise) => exercise.id === id);

  return (
    <Stack>
      <Typography>{exercise.name}</Typography>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Typography>Body Part: {exercise.bodyPart}</Typography>
      <Typography>Target Muscles: {exercise.target}</Typography>
      <Typography>Secondary Muscles: {exercise.secondaryMuscles}</Typography>
      <Typography>Instruction: {exercise.instruction}</Typography>
      <Typography>Equipment: {exercise.equipment}</Typography>
      <Link to={`/`}>
        <Button
          sx={{
            marginTop: '35px',
            background: '#a53860',
            ml: '21px',
            color: '#fff',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
            cursor: 'pointer',
          }}
        >
          Back
        </Button>
      </Link>
    </Stack>
  );
};

export default ExerciseDetails;
