import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import ExerciseList from './components/ExerciseList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercises' element={<ExerciseList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
