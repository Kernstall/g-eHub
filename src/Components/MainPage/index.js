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
    this.socket = new WebSocket(`ws://localhost:3000/g-eHub/ws`);
    //this.socket = new WebSocket(`wss://${ window.location.host }/g-eHub/ws`);

    this.socket.addEventListener('message', (event) => {/*
      console.log(event);*/
      const data = JSON.parse(event.data);
      this.setState({ cardMock: data });
      /*if(data.type === 'pop') {
        console.log(data.message);
        this.setState({ population: data.message });
      } else {
        this.addMessage(JSON.parse(event.data));
      }*/
    });

    this.state = {
      cardMock: {},
      openedKey: ''
    }
  }

  componentWillUnmount() {
    this.socket.close();
  }

  onCollapseOpen = (key) => {

  };

  render(){

    return (
        <div className={ style.mainGrid }>
          <div className={ style.headerGridItem }>
            <Header/>
          </div>
          <div className={ style.cardContainer }>
            { Object.entries(this.state.cardMock).map(([key, value]) => (<div className={ style.serverCard }><ServerCard collapsed = { this.state.openedKey === key } onCollapseOpen = { () => this.setState({ openedKey: key === this.state.openedKey ? '' : key }) } data={ value }/></div>)) }
          </div>
          <div className={ style.highlightContainer }>
            <MainPageCarousel></MainPageCarousel>
          </div>
        </div>
    );
  }
}
export default MainPage;