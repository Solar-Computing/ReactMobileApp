import React, { Component } from 'react';
import {
  Switch,
  View,
  Text,
  Slider
} from 'react-native';
import Button from 'react-native-button'
import styles from './settings_style.js'

export class OnOffSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.state
  }
  render() {
    return (
      <View style={styles.OnOffSwitch}>
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
    this.state = this.props.state
    this.state.value = parseInt((this.state.maximum - this.state.minimum) / 2)
  }
  handlePressMinus() {
    this.setState({value: this.state.value - 1})
  }
  handlePressPlus() {
    this.setState({value: this.state.value + 1})
  }
  render() {
    return(
      <View style={styles.MySlider}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Button style={{fontSize: 50, color: 'red'}}
                  styleDisabled={{color: 'red'}}
                  onPress={() => this.handlePressMinus()}>-</Button>
          <Text style={{paddingLeft: 20, paddingRight: 20, fontSize: 40}}>{this.state.value || 0}</Text>
          <Button style={{fontSize: 50, color: 'green'}}
                  styleDisabled={{color: 'red'}}
                  onPress={() => this.handlePressPlus()}>+</Button>
        </View>
        <Slider
          style={styles.slider}
          value={this.state.value}
          minimumValue={parseInt(this.state.minimum)}
          maximumValue={parseInt(this.state.maximum)}
          step={1}
          onValueChange={(value) => this.setState({value})}/>
      </View>
    );
  }
}