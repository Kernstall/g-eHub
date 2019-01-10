import React, { Component } from 'react';
//import { withStyles } from 'react-with-styles';
import Header from '../../Components/Header'
import ServerCard from '../../Components/ServerCard'

import style from './index.module.css';

//<div className={ style.starsLayout }/>

const cardMock = [
  {
    name: 'Gamma',
    players: 60,
    map: 'torch',
    descr: 'Лучший сервер',
    discord: '',
    gameLink: ''
  },
  {
    name: 'Eris',
    players: 60,
    map: 'torch',
    descr: 'Лучший сервер',
    discord: '',
    gameLink: ''
  }
];

class MainPage extends Component {
  render(){

    return (
        <div className={ style.mainGrid }>
          <div className={ style.headerGridItem }>
            <Header/>
          </div>
          <div className={ style.cardContainer }>
            { cardMock.map(element => (<div className={ style.serverCard }><ServerCard data={ element }/></div>)) }
          </div>
          <div className={ style.newsContainer }>
          </div>
        </div>
    );
  }
}
export default MainPage;