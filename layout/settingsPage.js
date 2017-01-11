import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  ScrollView,
  Switch
} from 'react-native';
import Accordion from 'react-native-accordion';
import styles from './settings_style.js';
import { MySlider, OnOffSwitch, ToggleSwitch } from './settingsOptionsComponents.js';

const optionComponents = {
  switch: OnOffSwitch,
  slider: MySlider
};

var my_switch : OnOffSwitch;
var allSwitches = [];

// myData = [
//   {"name": "General", "state": {"switchIsOn": false}, "options": [
//     {"name": "Temperature", "optionType": "slider", "state": {"minimum": "20", "maximum":"120"}},
//     {"name": "Microwave", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Dishwasher", "optionType": "switch", "state": {"switchIsOn": false}}
//     ]
//   },
//   {"name": "Kitchen", "state": {"switchIsOn": false}, "options": [
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Microwave", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Dishwasher", "optionType": "switch", "state": {"switchIsOn": false}}
//     ]
//   },
//   {"name": "Living Room", "state": {"switchIsOn": false}, "options": [
//     {"name": "Light 1", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Light 2", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Outlet 1", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Outlet 2", "optionType": "switch", "state": {"switchIsOn": false}}
//     ]
//   },
//   {"name": "Bed Room", "state": {"switchIsOn": false}, "options": [
//     {"name": "Outlet 1", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Outlet 2", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Heater", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}}
//     ]
//   }
// ]


class SettingsPage extends Component {
  render() {
    return (
      <ListOfRooms data={{}}></ListOfRooms>
    );
  }
}

class ListOfRooms extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
    };
  }
  componentDidMount() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //console.log("fetching...");
    fetch("http://jarvis.jarvisnet.ga:8165/test.php").then((loadedData) => {
        this.setState({dataSource: ds.cloneWithRows(JSON.parse(loadedData._bodyInit))});
    }).catch((error) => {
      console.log("Error... " + error);
    });
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderCollapsibleRow}
        enableEmptySections={true}
      />
    );
  }
  ////
  renderCollapsibleRow(rowData) {
    
 ///
    console.log("Hoooo");
    return (
      <MyAccordion
        state={rowData}
      />
    );
  }
}
///

class MyAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  myMethod(value) {
    for (var i = 0; i < allSwitches.length; i++) {
      if (typeof allSwitches[i]===typeof allSwitches[1] && allSwitches[i] != null) {
        allSwitches[i].setState({"switchIsOn": value})
      }
    }
  }

  render() {
    var header = (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{this.state.name}</Text>
        <ToggleSwitch state={this.state} updateMethod={(value) => this.myMethod(value)}/>
      </View>
    );
    var content = (
      <RoomOptions data={this.state}></RoomOptions>
    );
    return (
      <Accordion
        header={header}
        content={content}
      />
    );
  }
}

class RoomOptions extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data.options),
    };
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderOptionRow}
      />
    );
  }
    ///
  renderOptionRow(rowData) {
    const SpecificType = optionComponents[rowData.optionType];
    return (
      <View style={styles.contentView}>
        <View>
          <Text style={styles.contentText}>{rowData.name}</Text>
        </View>
        <SpecificType state={rowData.state} ref={(mswitch) => { my_switch = mswitch; allSwitches.push(my_switch); }}></SpecificType>
      </View>
    );
  }
}
///

export default SettingsPage;
