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
import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

class AwesomeProject extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hi Aayush!</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Hi Leonie!</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Hi Tom!</Text>
        </View>
      </Swiper>    );
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
