import React, { useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { ExitToApp } from '@mui/icons-material';

import { userSelector } from '../../features/auth';
import { useGetListsQuery } from '../../services/TMDB';
import { RatedCards } from '..';

const Profile = () => {
  const { user } = useSelector(userSelector);

  const { data: favoriteMovies, refetch: refetchFavorites } = useGetListsQuery({ listName: 'favorite/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });
  const { data: watchlistMovies, refetch: refetchWatchList } = useGetListsQuery({ listName: 'watchlist/movies', accountId: user.id, sessionId: localStorage.getItem('session_id'), page: 1 });

  useEffect(
    () => {
      refetchFavorites();
      refetchWatchList();
    },
    [],
  );
  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <Box style={{ padding: '2em 5em' }}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {favoriteMovies?.resuluts?.length && watchlistMovies?.resuluts?.length
        ? (
          <Typography variant="h5">
            Add Favorites or Watch List some movies to see here
          </Typography>
        )
        : (
          <Box>
            {/* <Typography variant="h5" gutterBottom>Favorites</Typography>
            <Box display="flex" flexWrap="wrap" className={classes.container}> */}
            <RatedCards title="Favorite Movies" data={favoriteMovies} />
            <RatedCards title="Watchlist" data={watchlistMovies} />

            {/* </Box> */}
          </Box>
        )}
    </Box>
  );
};
export default Profile;
