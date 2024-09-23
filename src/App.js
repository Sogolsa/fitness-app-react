import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
// import ExerciseList from './components/ExerciseList';
// import SearchResults from './components/SearchResults';

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/exercises' element={<ExerciseList />} />
    //     <Route path='/search' element={<SearchResults/>}/>
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
