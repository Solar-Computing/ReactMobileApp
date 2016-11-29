import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import styles from './navigation_style.js';
import Button from 'react-native-button';

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
                  <Button 
                    onPress={() => this.props.toSettings()}
                    containerStyle={styles.statusbarButton}>
                  <Text style={styles.statusbarTitles}>
                      Settings
                  </Text>
                  </Button>
                  <Button
                    onPress={() => this.props.toData()}
                    containerStyle={styles.statusbarButton}>
                  <Text style={styles.statusbarTitles}>
                      Data
                  </Text>
                  </Button>
                  <Button
                    onPress={() => this.props.toFeed()}
                    containerStyle={styles.statusbarButton}>
                  <Text style={styles.statusbarTitles}>
                      Feed
                  </Text>
                  </Button>
              </View>
        </View>
      );
    }
}


export default Navigation;
