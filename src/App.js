import React, { Component } from 'react';
import Background from './Components/Background'
import MainPage from './Components/MainPage'
import './styles/global.css'
import { Switch, Route } from 'react-router-dom'

window.Omega = 'сука';

class App extends Component {
  render() {
    return (
        <div>
          <MainPage/>
          {/*<Switch>
            <Route exact path='/g-eHub/' component={(MainPage)}/>
            <Route path='/g-eHub/' component={() => (<div>Ты обосрался!</div>)}/>
          </Switch>*/}
          <Background/>
        </div>
    );
  }
}

export default App;
