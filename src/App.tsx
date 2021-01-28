import React from 'react';
import { MainPage } from './components/MainPage';
import { Switch, Route } from 'react-router-dom';
import { FavoritesList } from './components/FavoritesList';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
          <Route exact component={MainPage} path='/' />
          <Route exact component={FavoritesList} path='/favorites' />
        </Switch>
    </div>
  );

}
