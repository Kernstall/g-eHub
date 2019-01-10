import {
    jarallax,
    jarallaxElement
} from 'jarallax';
import React, { Component } from 'react';
//import { withStyles } from 'react-with-styles';

import style from './index.module.css';

class Background extends Component {
    render(){
        console.log(style.test);
        return (
          <div className={ style.starsLayout }/>
        );
    }
}

export default Background;