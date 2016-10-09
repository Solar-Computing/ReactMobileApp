/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <FadeInView names='Aayush' />
        <FadeInView names='Leonie' />
        <FadeInView names='Sujeeth' />
        <FadeInView names='Tommy' />
      </View>
    );
  }
}

class FadeInView extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
     };
   }
   componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue: 1}            // Configuration
     ).start();                // Don't forget start!
   }
   render() {
     return (
       <Animated.View          // Special animatable View
         style={{opacity: this.state.fadeAnim}}>
         <Text>Hello {this.props.names}!</Text>
       </Animated.View>
     );
   }
 }

class LotsOfGreetings extends Component {
  render() {
//     let pic = {
//       uri: 'http://frostney.github.io/talks/react-native/slides/images/meme2.jpg'
//       uri: 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg'
//     };
    return (
//       <Image source={pic} style={{width: 193, height: 11}}/>
      <Text>Hello {this.props.names}!</Text>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
