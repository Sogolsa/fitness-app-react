import React, { useState, useEffect } from 'react';
import { Stack, Typography, Box } from '@mui/material';

import NavigationBar from './NavigationBar';
import ExerciseCard from './ExerciseCard';
import SearchResults from './SearchResults';

import { fetchExercises, authorizationOptions } from '../utils/api';

const ExerciseList = ({ searchResults, loading, error, searchPerformed }) => {
  const [exercises, setExercises] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage, setExercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseData = await fetchExercises(
        'https://exercisedb.p.rapidapi.com/exercises',
        authorizationOptions
      );
      setExercises(exerciseData);
    };
    fetchExerciseData();
  }, []);

  return (
    <Box>
      <Stack
        direction='row'
        spacing={2}
        flexWrap='wrap'
        justifyContent='flex-start'
      >
        {exercises.length > 0 ? (
          exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))
        ) : (
          <Typography>No exercises found</Typography>
        )}
      </Stack>
      {/* <SearchResults
        searchResults={searchResults}
        loading={loading}
        error={error}
        searchPerformed={searchPerformed}
      /> */}
    </Box>
  );
};

export default ExerciseList;
