/**
 * Sample React Native App
 * https:github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import styles from './layout/styles.js';
import SettingsPage from './layout/SettingsPage.js';

class AwesomeProject extends Component {
  render() {
    return (
        <SettingsPage></SettingsPage>
      );
  }
}
///

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
/*var roomsData = [
  {"name": "Kitchen", "sockets": [
    {"name": "Lights", "state": {"switchIsOn": false}},
    {"name": "Microwave", "state": {"switchIsOn": false}},
    {"name": "Dishwasher", "state": {"switchIsOn": false}}
    ]
  },
  {"name": "Living Room", "sockets": [
    {"name": "Light 1", "state": {"switchIsOn": true}},
    {"name": "Light 2", "state": {"switchIsOn": true}},
    {"name": "Outlet 1", "state": {"switchIsOn": true}},
    {"name": "Outlet 2", "state": {"switchIsOn": true}}
    ]
  },
  {"name": "Bed Room", "sockets": [
    {"name": "Outlet 1", "state": {"switchIsOn": true}},
    {"name": "Outlet 2", "state": {"switchIsOn": true}},
    {"name": "Heater", "state": {"switchIsOn": true}},
    {"name": "Lights", "state": {"switchIsOn": true}}
    ]
  }
  ]
  */