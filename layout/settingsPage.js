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
import { MySlider, OnOffSwitch } from './settingsOptionsComponents.js';

const optionComponents = {
  switch: OnOffSwitch,
  picker: MySlider
};

// myData = [
//   {"name": "General", "options": [
//     {"name": "Temperature", "optionType": "slider", "state": {"range": "100"}},
//     {"name": "Microwave", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Dishwasher", "optionType": "switch", "state": {"switchIsOn": false}}
//     ]
//   {"name": "Kitchen", "options": [
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Microwave", "optionType": "switch", "state": {"switchIsOn": false}},
//     {"name": "Dishwasher", "optionType": "switch", "state": {"switchIsOn": false}}
//     ]
//   },
//   {"name": "Living Room", "options": [
//     {"name": "Light 1", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Light 2", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Outlet 1", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Outlet 2", "optionType": "switch", "state": {"switchIsOn": true}}
//     ]
//   },
//   {"name": "Bed Room", "options": [
//     {"name": "Outlet 1", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Outlet 2", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Heater", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": true}},
//     {"name": "Lights", "optionType": "switch", "state": {"switchIsOn": true}}
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
    console.log("fetching...");
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
  ///
  renderCollapsibleRow(rowData) {
    var header = (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{rowData.name}</Text>
      </View>
    );

    var content = (
      <RoomOptions data={rowData.options}></RoomOptions>
    );
 ///
    return (
      <Accordion
        header={header}
        content={content}
      />
    );
  }
}
///
class RoomOptions extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
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
        <View style={{flex: 1, flexDirection: 'row', padding: 20, justifyContent: 'flex-end'}}>
          <SpecificType state={rowData.state}></SpecificType>
        </View>
      </View>
    );
  }
}
///

export default SettingsPage;
