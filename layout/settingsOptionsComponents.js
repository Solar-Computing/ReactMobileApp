import React, { Component } from 'react';
import {
  Switch,
  View,
  Text,
  Slider
} from 'react-native';
import styles from './settings_style.js'

export class OnOffSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.state
  }
  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => {this.setState({"switchIsOn": value});
                                      console.log(this.state);}}
          value={this.state.switchIsOn}
        />
      </View>
    );
  }
}

export class MySlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 5
    }
  }
  render() {
    return(
      <View>
        <Slider
          style={styles.slider}
          value={this.state.value}
          onValueChange={(value) => this.setState({value})}/>
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
}