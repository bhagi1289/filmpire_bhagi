import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolBar: {
    height: '70px',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
    // padding: '4em 16em',
    // width: '100%',
  },
}));
