import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './lib/Theme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Homepage } from './containers/Homepage';
import { GlobalStyles } from './lib/Theme/GlobalStyles';
 
function App() {
  return (
    <div className="App">
    <ThemeProvider>
      <GlobalStyles/>
      <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
           </Switch>
        </Router>

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
