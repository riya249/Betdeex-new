import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from './lib/Theme';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Homepage } from './containers/Homepage';
import { GlobalStyles } from './lib/Theme/GlobalStyles';
import {AllEvent} from './containers/Events/AllEvent';
import { Event } from './containers/Events/Event';
import {Createbet} from './containers/Createbet/Createbet';
//Additional
import WalletContext from './utils/WalletContext';
import { ethers } from 'ethers';







declare global {
  interface Window {
    wallet: any;
  }
}


window.wallet = new ethers.Wallet(
  '0x26dfe99b98515fc4fd53a811b7db194afaaf6d4133aa371e7270b477bc086b07'
);


function App() {
  return (
    <div className="App">
    <ThemeProvider>
      <GlobalStyles/>
      <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/all-event" component={AllEvent} />
            <Route exact path="/event" component={Event} />
            <Route exact path="/faq" component={Event} />
            <Route exact path="/create-bet" component={Createbet} />
           </Switch>
        </Router>

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
