import { makeStyles, createStyles, Theme } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    formControl: {
      margin: theme.spacing(3),
    },
    paper: {
      maxWidth: 'auto',
      margin: theme.spacing(12),
      padding: theme.spacing(2),
      backgroundColor: orange[200],
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    titleHeader: {
      fontSize: 20,
      fontWeight: 900,
      padding: theme.spacing(3),
      color: '#222222',
      fontFamily: 'Consolas',
      textAlign: 'center',
    },
    titleText: {
      fontSize: 12,
      fontWeight: 600,
    },
    dialogTitle: {
      textAlign: 'center',
    },
    fabAdd: {
      margin: 0,
      top: 'auto',
      right: 30,
      bottom: 30,
      left: 'auto',
      position: 'fixed',
    },
    fabFilter: {
      margin: 0,
      top: 'auto',
      right: 30,
      bottom: 100,
      left: 'auto',
      position: 'fixed',
    },
    button: {
      margin: 'auto',
      display: 'block',
      backgroundColor: '#FF8C00',
      fontFamily: 'Consolas',
      fontSize: 15,
      fontWeight: 600,

    },
  })
);
