import React, { Component } from 'react';
import {
  Text,
  View,
  ListView
} from 'react-native';
import styles from './settings_style.js';
import OnOffSwitch from './OnOffSwitch.js';
import MySlider from './MySlider.js';

const optionComponents = {
  switch: OnOffSwitch,
  slider: MySlider
};

let mySwitch: OnOffSwitch;

export default class RoomOptions extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data.options),
    };
  }

  renderOptionRow(rowData) {
    const SpecificType = optionComponents[rowData.optionType];
    return (
      <View style={styles.contentView}>
        <View>
          <Text style={styles.contentText}>{rowData.name}</Text>
        </View>
        <SpecificType 
          state={rowData.state}
          // testing allSwitches transfer
          ref={(mswitch) => { mySwitch = mswitch; console.log(this.props.allSwitches); this.props.allSwitches.push(mySwitch); }}
        />
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderOptionRow}
      />
    );
  }
}
