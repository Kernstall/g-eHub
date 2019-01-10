import React, { Component } from 'react';
//import { withStyles } from 'react-with-styles';

//import ParallaxMousemove from 'react-parallax-mousemove'

import style from './index.module.css';

//<div className={ style.starsLayout }/>

class Background extends Component {
    render(){
      /*const styles = {
        outter: {
          backgroundSize: 'cover',
          width:'100%',
          height: '100%',
          position: 'absolute',
          overflow: 'hidden',
          'z-index': -1,
        },
        bgLayerStyle: {
          position: 'absolute',
          height: '100%',
          transform: 'translate(-15%, 17%)',
        }
      };*/

        return (
            <div className={ style.starsLayout }/>
        );
    }
}

/* return (
            <div>
              <ParallaxMousemove containerStyle={styles.outter} fullHeight={true}>
                <ParallaxMousemove.Layer layerStyle={styles.bgLayerStyle} config={{
                  xFactor: 0.05,
                  yFactor: 0,
                  springSettings: {
                    stiffness: 1000,
                    damping: 30
                  }
                }}>
                  <img src={require('../../space2.jpg')} alt="Parallax Layer"/>
                </ParallaxMousemove.Layer>
              </ParallaxMousemove>
            </div>
        );*/

export default Background;