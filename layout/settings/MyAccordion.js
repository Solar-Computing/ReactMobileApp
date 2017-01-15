import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Accordion from 'react-native-accordion';
import styles from './settings_style.js';
import ToggleSwitch from './ToggleSwitch.js';
import RoomOptions from './RoomOptions.js';

const allSwitches = [];

export default class MyAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  myMethod(value) {
    for (let i = 0; i < allSwitches.length; i++) {
      if (typeof allSwitches[i] === typeof allSwitches[1] && allSwitches[i] != null) {
        allSwitches[i].setState({ switchIsOn: value });
      }
    }
  }

  render() {
    const header = (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{this.state.name}</Text>
        <ToggleSwitch state={this.state} updateMethod={(value) => this.myMethod(value)} />
      </View>
    );
    const content = (
      <RoomOptions data={this.state} allSwitches={allSwitches} />
    );
    return (
      <Accordion
        header={header}
        content={content}
      />
    );
  }
}
