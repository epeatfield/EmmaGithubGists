import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { FavoritesList } from './components/FavoritesList';
import Header from './components/Header';
import Error from './components/Error';
import About from './components/About';

/**
 * Main Application function that sets up routes and the Header for each page.
 */


export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact component={SearchPage} path='/' />
          <Route exact component={FavoritesList} path='/favorites' />
          <Route exact component={About} path='/about'/>
          <Route exact component={Error}/>
        </Switch>
      </Router>
    </div>
  );

}
