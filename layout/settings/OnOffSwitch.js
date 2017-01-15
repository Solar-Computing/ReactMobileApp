import React, { Component } from 'react';
import {
  Switch,
  View
} from 'react-native';
import styles from './settings_style.js';

export default class OnOffSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }
  render() {
    return (
      <View style={styles.OnOffSwitch}>
        <Switch
          onValueChange={(value) => {
            this.setState({ switchIsOn: value });
                                      this.props.state.switchIsOn = value;
                                    }}
          value={this.props.state.switchIsOn}
        />
      </View>
    );
  }
}
