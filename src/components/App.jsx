import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import useStyles from './styles';

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolBar} />
        <Routes>
          <Route exact path="/movies/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/" element={<Movies />} />
        </Routes>

      </main>
    </div>
  );
};

export default App;

