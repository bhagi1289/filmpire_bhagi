import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  featuredCardContainer: {
    marginBottom: '50px',
    display: 'flex',
    justifyContent: 'center',
    height: '750px',
    textDecoration: 'none',
  },
  card: {
    // width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  cardRoot: {
    position: 'relative',
  },
  cardMedia: {
    position: 'absolute',
    top: '0', // Changed from '95px' to '0' to include the top part of the image
    right: '0',
    bottom: '0', 
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.575)',
    backgroundBlendMode: 'darken',
  },
  cardContent: {
    color: '#fff',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  cardContentRoot: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
}));
