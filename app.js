import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Image
} from 'react-native';
import DataList from './layout/feed.js';
import Navigation from './layout/navigation.js';
import Swiper from 'react-native-swiper';
import SettingsPage from './layout/settingsPage.js';
import styles from './layout/styles.js';

var ourSwiper: Swiper;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  toSettings() {
    ourSwiper.scrollBy(0 - this.state.index, true);
    this.setState({index: 0})
  }

  toData() {
    ourSwiper.scrollBy(1 - this.state.index, true);
    this.setState({index: 1})
  }

  toFeed() {
    ourSwiper.scrollBy(2 - this.state.index, true);
    this.setState({index: 2})
  }


  render() {
    return (
      <View>
        <Navigation
        toFeed={() => this.toFeed()}
        toData={() => this.toData()}
        toSettings={() => this.toSettings()}
        ></Navigation>
        <Swiper
        ref={(swiper) => { ourSwiper = swiper; }}
        style={styles.wrapper}
        loop={false}
        index={this.state.index}>
          <View style={styles.slide1}>
            <SettingsPage></SettingsPage>
          </View>
          <View style={styles.slide2}>
            <Image
                source={require("./layout/img/charts_without_nav.jpg")}
                resizeMode="stretch"
                style={{flexShrink:1, height: 430, }}
            />
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
