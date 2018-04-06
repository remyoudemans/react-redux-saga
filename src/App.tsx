//import "babel-polyfill"

import * as React from 'react'
import * as ReactDOM from "react-dom"
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { Action } from 'typed-redux-kit'
import { TextArea } from "./components/text-area"
//import './App.css';

/*const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

const action = (type: Action) : Action => store.dispatch({type})
*/


class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextArea />
      </div>
    );
  }
}

export default App

//<img src={logo} className="App-logo" alt="logo" />