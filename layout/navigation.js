import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './navigation_style.js';
import Button from 'react-native-button';

class Navigation extends Component {
    constructor(props) {
      super(props)
      this.state = {
        index: 0
      }
    }

    handleSettings() {
      this.props.toSettings()
      this.setState({index: 0})
      //set background of buttons
    }
    handleData() {
      this.props.toData()
      this.setState({index: 1})
      //set background of buttons
    }
    handleFeed() {
      this.props.toFeed()
      this.setState({index: 2})
      //set background of buttons
    }

    render() {
      return (
          <View >
              <View style={styles.navbar}>
                  <Image
                      style={styles.navBarImage}
                      source={require('./img/logo.png')}
                  />
              </View>


              <View style={styles.statusbar}>
                  <Button
                    onPress={() => this.handleSettings()}
                    containerStyle={[styles.statusbarButton, 
                      this.state.index == 0 && styles.activebarButton]}
                    style={[styles.statusbarTitles, 
                      this.state.index == 0 && styles.activebarTitles]}>
                    Settings
                  </Button>
                  <Button
                    onPress={() => this.handleData()}
                    containerStyle={[styles.statusbarButton, 
                      this.state.index == 1 && styles.activebarButton]}
                    style={[styles.statusbarTitles, 
                      this.state.index == 1 && styles.activebarTitles]}>
                    Data
                  </Button>
                  <Button
                    onPress={() => this.handleFeed()}
                    containerStyle={[styles.statusbarButton, 
                      this.state.index == 2 && styles.activebarButton]}
                    style={[styles.statusbarTitles, 
                      this.state.index == 2 && styles.activebarTitles]}>
                    Feed
                  </Button>
              </View>
        </View>
      );
    }
}


export default Navigation;
