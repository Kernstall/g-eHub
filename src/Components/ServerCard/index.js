import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Collapse } from 'reactstrap';

import style from './index.module.css';

class ServerCard extends React.Component {

  constructor(){
    super();
    this.state = {
      collapsed: false
    }
  }

  render(){
    const data = this.props.data;
    return (
        <div>
          <Card>{/*
            <CardImg top width="100px" src="https://vignette.wikia.nocookie.net/logopedia/images/1/16/300px-DC_Comics_logo.svg.png/revision/latest?cb=20110127205851" />*/}
            <CardBody>
              <div className={ style.titleContainer }>{/*
                <img src={ 'https://ss13.ru/img/Server_6.svg' } />*/}
                <CardTitle className={ style.title }>{ data.name }</CardTitle>
                <span className={ style.collapse } onClick={ ()=> this.setState({ collapsed: !this.state.collapsed }) }>
                  <i className={ !this.state.collapsed ? "fas fa-arrow-down" : "fas fa-arrow-up" }></i>
                </span>
              </div>
              <Collapse className={ style.collapseWrapper } isOpen={this.state.collapsed}>
                <CardText>
                  <b>Players: </b>
                  { data.players }
                  </CardText>
                <CardText>
                  <b>Map: </b>
                  { data.map }
                  </CardText>
                <CardText>
                  <b>Description: </b>
                  { data.descr }
                  </CardText>
                <Button href={ data.discord }><i className="fab fa-discord"></i></Button>
              </Collapse>
              <Button href={ data.gameLink } className={ style.playButton }><i className="fas fa-play"></i><span> Join server</span></Button>
            </CardBody>
          </Card>
        </div>
    );
  }

};

export default ServerCard;