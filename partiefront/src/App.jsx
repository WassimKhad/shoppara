import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './data/store';
import Routes from './routes';
import { loadUser } from './data/reducers/auth';


import setAuthToken from './helpers/setAuthToken.js'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
function App() {
  useEffect(() => {
    console.log('app')
   store.dispatch(loadUser()) 
  }, [])
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;