import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

class SolarApp extends Component {
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

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#2c3239',
        paddingTop: 20,
        paddingBottom: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    navBarImage: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusbar: {
        backgroundColor: '#191f28',
        paddingTop: 3,
        paddingBottom: 3,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    statusbarTitles: {
        color: '#F5FCFF',
        justifyContent: 'center',
        paddingLeft: 40,
        flex: 1
    }
});

AppRegistry.registerComponent('SolarApp', () => SolarApp);
