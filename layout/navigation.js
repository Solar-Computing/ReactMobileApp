import React, {Component} from 'react';
import {
  Alert,
  View,
  Text,
  Image
} from 'react-native';
import styles from './navigation_style.js';
import Button from 'react-native-button';

class Navigation extends Component {
     _handlePress1() {
        console.log('Pressed!');
        Alert.alert(
            'Button Pressed',
            'Navigate to Settings',
          )
        // scrollBy(index, animated)
      }

      _handlePress2() {
        // console.log('Pressed!');
        Alert.alert(
            'Button Pressed',
            'Navigate to Data',
          )
      }

      _handlePress3() {
        // console.log('Pressed!');
        Alert.alert(
            'Button Pressed',
            'Navigate to Feed',
          )
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
                  containerStyle={styles.statusbarButton}
                    onPress={() => this._handlePress1()}>
                    <Text style={styles.statusbarTitles}>
                        Settings
                    </Text>
                  </Button>

                  <Button
                  containerStyle={styles.statusbarButton}
                    onPress={() => this._handlePress2()}>
                    <Text style={styles.statusbarTitles}>
                        Data
                    </Text>
                  </Button>

                  <Button
                  containerStyle={styles.statusbarButton}
                    onPress={() => this._handlePress3()}>
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
