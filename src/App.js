import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import logo from './logo.svg';
import UserInfo from './containers/UserInfoContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <p>Insta-WHAT?!</p>
          <UserInfo />
        </div>
      </Provider>
    );
  }
}

export default App;
