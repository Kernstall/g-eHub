import React, { Component } from 'react';
//import { withStyles } from 'react-with-styles';
import Header from '../../Components/Header'
import ServerCard from '../../Components/ServerCard'
import MainPageCarousel from '../../Components/MainPageCarousel'

import style from './index.module.css';

//<div className={ style.starsLayout }/>

class MainPage extends Component {

  constructor(){
    super();
    this.state = {
      cardMock: [
        {
          name: 'Gamma Station',
          players: 60,
          map: 'NFS Gamma',
          descr: 'Сервер классической станции со своим билдом.',
          discord: 'https://discord.gg/V92ZHwY',
          gameLink: 'byond://5.9.12.156:2507'
        },
        {
          name: 'Eris Station',
          players: 60,
          map: 'CEV Eris',
          descr: 'Сервер с уникальной графикой, картой и лором, стремящийся создать нечто новое на основе нашей старой игры.',
          discord: 'https://discord.gg/CTW9A3Y',
          gameLink: 'byond://5.9.12.156:2511'
        }
      ]
    }
  }

  render(){

    return (
        <div className={ style.mainGrid }>
          <div className={ style.headerGridItem }>
            <Header/>
          </div>
          <div className={ style.cardContainer }>
            { this.state.cardMock.map(element => (<div className={ style.serverCard }><ServerCard data={ element }/></div>)) }
          </div>
          <div className={ style.highlightContainer }>
            <MainPageCarousel></MainPageCarousel>
          </div>
        </div>
    );
  }
}
export default MainPage;