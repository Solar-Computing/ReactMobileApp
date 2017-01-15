import React, {Component} from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './app.js';

class Home extends Component {
  render() {
    return (
      <View>
        <App></App>
      </View>
    );
  }
}

AppRegistry.registerComponent('SolarApp', () => Home);
