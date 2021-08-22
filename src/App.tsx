import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Subscribe from './pages/subscribe/Subscribe';
import About from './pages/about/About';
import Home from './pages/home/Home';

import Topbar from './components/topbar/topbar';
import Footer from './components/footer/footer';
import ScrollToTop from './utils/scroll-to-top';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Topbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/subscribe" component={Subscribe} />  
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
