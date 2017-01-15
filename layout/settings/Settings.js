import React, { Component } from 'react';
import ListOfRooms from './ListOfRooms.js';

export default class SettingsPage extends Component {
  render() {
    return (
      <ListOfRooms data={{}} />
    );
  }
}

/* dummy data:
myData = [
  {"name": "General", "state": {"switchIsOn": false}, "options": [
    {"name": "Temperature", "optionType": "slider", "state": {"minimum": "20", "maximum":"120"}},
    {"name": "Microwave", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Dishwasher", "optionType": "switch", "state": {"switchIsOn": false}}
    ]
  },
  {"name": "Kitchen", "state": {"switchIsOn": false}, "options": [
    {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Microwave", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Dishwasher", "optionType": "switch", "state": {"switchIsOn": false}}
    ]
  },
  {"name": "Living Room", "state": {"switchIsOn": false}, "options": [
    {"name": "Light 1", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Light 2", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Outlet 1", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Outlet 2", "optionType": "switch", "state": {"switchIsOn": false}}
    ]
  },
  {"name": "Bed Room", "state": {"switchIsOn": false}, "options": [
    {"name": "Outlet 1", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Outlet 2", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Heater", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
    {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}}
    ]
  }
]
*/
