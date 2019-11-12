import React from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './Components/counter'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const initialState = {
  count: 42
}

function reducer(state = initialState, action){
  switch(action.type){
    case "INCREMENT": 
      return {
        count : state.count + 1
      }
    case "DECREMENT": 
      return {
        count : state.count - 1
      }
      default: 
        return state 
  }
}

const store = createStore(reducer);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          <Counter/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
