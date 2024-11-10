import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Typography, Stack, Button, Box } from '@mui/material';

const ExerciseDetails = ({
  exercises,
  searchPerformed,
  searchResults,
  setSearchPerformed,
}) => {
  const { id } = useParams();
  console.log('Exercise ID from URL:', id);
  console.log('Exercises passed to component:', exercises);
  console.log('Search Results:', searchResults);

  const exerciseList =
    searchPerformed && searchResults.length > 0 ? searchResults : exercises;

  console.log('Exercise List:', exerciseList);

  const exercise = exerciseList.find((exercise) => exercise.id === id);

  console.log('Found Exercise:', exercise);

  if (!exercise) {
    return <Typography>Loading exercise details...</Typography>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Stack className='exercise-card'>
        <Typography
          fontWeight='bold'
          textTransform='capitalize'
          sx={{
            textAlign: { xs: 'center', lg: 'left' },
            padding: { xs: '10px', lg: '5px' },
          }}
        >
          {exercise.name}
        </Typography>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Typography
          textTransform='capitalize'
          sx={{
            textAlign: { xs: 'center', lg: 'left' },
            padding: { xs: '10px', lg: '5px' },
          }}
        >
          <span style={{ fontWeight: 'bold', color: '#8e2d53' }}>
            Body Part:{' '}
          </span>
          {exercise.bodyPart}
        </Typography>
        <Typography
          textTransform='capitalize'
          sx={{
            textAlign: { xs: 'center', lg: 'left' },
            padding: { xs: '10px', lg: '5px' },
          }}
        >
          <span style={{ fontWeight: 'bold', color: '#8e2d53' }}>
            Target Muscles:{' '}
          </span>
          {exercise.target}
        </Typography>
        <Typography
          textTransform='capitalize'
          sx={{
            textAlign: { xs: 'center', lg: 'left' },
            padding: { xs: '10px', lg: '5px' },
          }}
        >
          <span style={{ fontWeight: 'bold', color: '#8e2d53' }}>
            Secondary Muscles:{' '}
          </span>
          {exercise.secondaryMuscles.map((muscle, index) => (
            <li key={index}>{muscle.trim()}</li>
          ))}
        </Typography>
        <Typography
          textTransform='capitalize'
          sx={{
            textAlign: { xs: 'center', lg: 'left' },
            padding: { xs: '10px', lg: '5px' },
          }}
        >
          <span style={{ fontWeight: 'bold', color: '#8e2d53' }}>
            Equipment:{' '}
          </span>
          {exercise.equipment}
        </Typography>
        <Typography
          sx={{
            textAlign: { xs: 'center', lg: 'left' },
            padding: { xs: '10px', lg: '5px' },
            pr: { xs: '25px' },
          }}
        >
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
