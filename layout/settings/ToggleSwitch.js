import React, { Component } from 'react';
import {
  Switch,
  View
} from 'react-native';
import styles from './settings_style.js';

export default class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state.toggle;
  }
  updateSwitches(value) {
    for (let i = 0; i < this.props.state.options.length; i++) {
      if (this.props.state.options[i].optionType === 'switch') {
        this.props.state.options[i].state.switchIsOn = value;
      }
    }
    this.props.updateMethod(value);
  }
  render() {
    return (
      <View style={styles.OnOffSwitch}>
        <Switch
          onValueChange={(value) => { 
                                      this.setState({ switchIsOn: value }); 
                                      this.props.state.toggle.switchIsOn = value;
                                      this.updateSwitches(value);
                                    }}
          value={this.props.state.toggle.switchIsOn}
        />
      </View>
    );
  }
}
