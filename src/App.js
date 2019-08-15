import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number';
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

class App extends Component {
  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <Provider store = {store}>

          
        <Number/>



      </Provider>
      </header>
    
    </div>
  );
}
}

export default App;
