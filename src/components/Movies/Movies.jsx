import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuer, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
  const { data } = useGetMoviesQuery();
  console.log(data);
    <div>
      Movies

    </div>;
};

export default Movies;
