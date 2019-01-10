import React, { Component } from 'react';
import './App.css';
import Background from './Components/Background'
import MainPage from './Components/MainPage'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/' component={(MainPage)}/>
            <Route path='/' component={() => (<div>Ты обосрался!</div>)}/>
          </Switch>
          <Background/>
        </div>
    );
  }
}

export default App;
