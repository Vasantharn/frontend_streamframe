// import './containers/Task'
import { Task } from './containers/Task';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './logo.png';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF8C00',
    },
    secondary: {
      main: '#737373',
    },
    background: {
      default: '#222222',
    },
    text: {
      primary: '#222222',
      secondary: '#737373',
    },
  },
});

export const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ margin: '80px 20px 20px 15px', paddingLeft: 0 }}>
        <h1
          style={{
            fontSize: 35,
            fontFamily: 'Consolas',
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '0.07em',
            verticalAlign: 'middle',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <img
            style={{
              verticalAlign: 'middle',
            }}
            src={logo}
            alt="Streamline Logo"
            width="100"
            height="100"
          />
          <br />
          Streamframe Task Management
        </h1>
        <Task />
      </div>
    </MuiThemeProvider>
  );
};
