import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ScrollView,
  ListView
} from 'react-native';
import DataList from './layout/feed.js';
import Navigation from './layout/navigation.js';
import Swiper from 'react-native-swiper';
import SettingsPage from './layout/settingsPage.js';
import styles from './layout/styles.js';

myList = ["hi","there","how","are","you"];
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Home extends Component {
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

AppRegistry.registerComponent('Home', () => Home);
