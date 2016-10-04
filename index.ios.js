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
  Image
} from 'react-native';

class AwesomeProject extends Component {
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

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <AwesomeProject names='Rexxar' />
        <AwesomeProject names='Jaina' />
        <AwesomeProject names='Valeera' />
      </View>
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

AppRegistry.registerComponent('LotsOfGreetings', () => AwesomeProject);
