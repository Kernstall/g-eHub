import React, { Component } from 'react';
//import { withStyles } from 'react-with-styles';

//import ParallaxMousemove from 'react-parallax-mousemove'

import style from './index.module.css';
import { TweenMax, Expo } from "gsap/TweenMax";
import $ from 'jquery'
import MobileDetect from 'mobile-detect'

import styles from './parallax.css'

//<div className={ style.starsLayout }/>

class Background extends Component {

  constructor(){
    super();
    let md = new MobileDetect(window.navigator.userAgent);

    this.state = {
      isMobile: md.mobile()

    }
  }

  componentDidMount() {
    var $layer_0 = $('.layer-0'),
        $layer_1 = $('.layer-1'),
        $layer_2 = $('.layer-2'),
        $container = $('body'),
        container_w = $container.width(),
        container_h = $container.height();

    $(window).on('mousemove.parallax', function(event) {
      var pos_x = event.pageX,
          pos_y = event.pageY,
          left  = 0,
          top   = 0;

      left = container_w / 2 - pos_x;
      top  = container_h / 2 - pos_y;

      TweenMax.to(
          $layer_2,
          1,
          {
            css: {
              transform: 'translateX(' + left / 2 + 'px) translateY(' + top / 2 + 'px)'
            },
            ease:Expo.easeOut,
            overwrite: 'all'
          });

      TweenMax.to(
          $layer_1,
          1,
          {
            css: {
              transform: 'translateX(' + left / 4 + 'px) translateY(' + top / 2 + 'px)'
            },
            ease:Expo.easeOut,
            overwrite: 'all'
          });

      TweenMax.to(
          $layer_0,
          10,
          {
            css: {
              transform: 'rotate(' + left / 200 + 'deg)'
            },
            ease: Expo.easeOut,
            overwrite: 'none'
          }
      )
    });
  }

  render(){
        return (
            <div className={ style.starsLayout }>
              {
                !this.state.isMobile ?
                    <div id="planet-2" className="planet layer-2"/> :
                    null
              }
              {
                !this.state.isMobile ?
                    <div id="planet-1" className="planet layer-1"/> :
                    null
              }
            </div>
        );
    }
}

export default Background;