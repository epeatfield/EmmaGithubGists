import React from 'react';
import { SearchPage } from './components/SearchPage';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { FavoritesList } from './components/FavoritesList';
import Header from './components/Header';
// import Error from './components/Error';
// import About from './components/About';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact component={SearchPage} path='/' />
          <Route exact component={FavoritesList} path='/favorites' />
          {/* <Route exact component={About} path='/about'/>
          <Route exact component={Error} path='/404'/> */}
        </Switch>
      </Router>
    </div>
  );

}
