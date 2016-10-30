import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  ScrollView
} from 'react-native';
import DataList from './layout/feed.js';
import Navigation from './layout/navigation.js';

class Home extends Component {
  render() {
    return (
        <ScrollView>
            <View>
                <Navigation></Navigation>
            </View>
            <ScrollView>
                <DataList></DataList>
            </ScrollView>
        </ScrollView>
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);
