import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import App from './App.js';

class Home extends Component {
  render() {
    return (
      <View>
        <App></App>
      </View>
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);
