import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css'


import App from './App';
import {Provider} from 'react-redux'
import store from './data/store'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.component.jsx'
ReactDOM.render(
  <Provider store={store}>

  <BrowserRouter>
  <Navbar/>
    <Switch>
      <Route exact path='/'components={App}/>
    </Switch>
  </BrowserRouter>
    <App />
  </Provider>,
  document.getElementById('root')
);
