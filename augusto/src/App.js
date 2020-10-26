import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import PhotoDetail from './components/PhotoDetail';
import { AppInfoProvider } from './components/AppInfoContext';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #eee;
    padding: 5rem 20rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media (max-width: 1366px) {
      padding: 0 10rem;
      text-align: center;
    }
    @media (max-width: 800px) {
      padding: 0 5rem;
    }
    @media (max-width: 600px) {
      padding: 0 1.5rem;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <AppInfoProvider>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Home} />
            <Route exact path="/photo-details/:id" component={PhotoDetail} />
          </Switch>
        </Router>
      </AppInfoProvider>

      <GlobalStyle />
    </div>
  );
}

export default App;
