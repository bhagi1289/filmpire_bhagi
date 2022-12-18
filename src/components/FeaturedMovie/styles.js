import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  featuredCardContainer: {
    marginBottom: '160px',
    display: 'flex',
    justifyContent: 'center',
    height: '490px',
    textDecoration: 'none',
  },
  card: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  cardRoot: {
    postion: 'relative',
  },
  cardMedia: {
    position: 'absolute',
    top: '95px',
    right: 0,
    height: '593px',
    width: '1275px',
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
