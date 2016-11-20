import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import DataList from './layout/feed.js';
import Navigation from './layout/navigation.js';
import Swiper from 'react-native-swiper';
import SettingsPage from './layout/settingsPage.js';
import styles from './layout/styles.js';

class App extends Component {
  render() {
    return (
      <View>
        <Navigation></Navigation>
        <Swiper style={styles.wrapper} loop={false}>
          <View style={styles.slide1}>
            <SettingsPage></SettingsPage>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Sujeeths Page</Text>
          </View>
          <View style={styles.slide3}>
            <DataList></DataList>
          </View>
        </Swiper>
      </View>
    );
  }
}

export default App;
