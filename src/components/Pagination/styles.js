import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 500px',
  },
  buttons: {
    margin: '30px 2px',
  },
  pageNumber: {
    margin: '0 20px !important',
    color: theme.palette.text.primary,

  },
}));
