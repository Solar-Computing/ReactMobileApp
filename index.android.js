import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import DataList from './layout/feed.js';
import Navigation from './layout/navigation.js';
import Swiper from 'react-native-swiper';
import SettingsPage from './layout/SettingsPage.js';

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})


class Home extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
        <View style={styles.slide1}>
          <SettingsPage></SettingsPage>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>And simple</Text>
        </View>
        <View style={styles.slide3}>
          <ScrollView>
              <View>
                  <Navigation></Navigation>
              </View>
              <ScrollView>
                  <DataList></DataList>
              </ScrollView>
          </ScrollView>
        </View>
      </Swiper>

    );
  }
}

AppRegistry.registerComponent('Home', () => Home);
