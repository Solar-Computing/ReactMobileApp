import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles.js';

class Navigation extends Component {
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
                  <Text style={styles.statusbarTitles}>
                      Settings
                  </Text>
                  <Text style={styles.statusbarTitles}>
                      Data
                  </Text>
                  <Text style={styles.statusbarTitles}>
                      Feed
                  </Text>
              </View>
        </View>
      );
    }
}


export default Navigation;
