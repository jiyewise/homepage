import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import { Intro } from './Intro/Intro';
import { MenuBar } from './Components/MenuBar';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
    ].join(','),
  },});

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <div>
            {/* <h1>Hello!</h1> */}
            {/* <Switch> */}
            {/* </Switch> */}
            <MenuBar/>
            <Route path='/' exact render={()=><Intro/>}/>
          </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
