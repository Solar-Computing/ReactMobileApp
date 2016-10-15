/**
 * Sample React Native App
 * https:github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Switch
} from 'react-native';
var Accordion = require('react-native-accordion')
var roomsData = [
  {name: "Kitchen", sockets: [
    {name: 'Lights', state: {switchIsOn: false}},
    {name: 'Fridge', state: {switchIsOn: false}}]},
  {name: "Living Room", sockets: [
    {name: 'Light 1', state: {switchIsOn: true}},
    {name: 'Light 2', state: {switchIsOn: true}}]}]

class AwesomeProject extends Component {
  render() {
    return (
      <ScrollView style={null}>
        <ListOfRooms data={roomsData}></ListOfRooms>
      </ScrollView>
    );
  }
}

class ListOfRooms extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
    };
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderCollapsibleRow}
      />
    );
  }
  renderCollapsibleRow(rowData) {
    var header = (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{rowData.name}</Text>
      </View>
    );

    var content = (
      <RoomOptions data={rowData.sockets}></RoomOptions>
    );
 
    return (
      <Accordion
        header={header}
        content={content}
      />
    );
  }
}

class RoomOptions extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
    };
  } render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderOptionRow}
        />
      );
    }
    renderOptionRow(rowData) {
      return (
        <View style={styles.contentView}>
          <View><Text style={styles.contentText}>{rowData.name}</Text></View>
          <View style={{flex: 1, flexDirection: 'row', padding: 20, justifyContent: 'flex-end'}}><OnOffSwitch state={rowData.state}></OnOffSwitch></View>
        </View>
        );
    }
  }

class OnOffSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.state
  }
  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({switchIsOn: value})}
          value={this.state.switchIsOn}
        />
      </View>
          );
  }
}

const styles = StyleSheet.create({
 headerText: {
  fontSize: 25,
  fontWeight: 'bold'
 },
 headerView: {
  alignItems: 'center',
  padding: 25,
  backgroundColor: '#D3D3D3',
 },
 contentText: {
  padding: 20,
  fontSize: 20,
 },
 contentView: {
  backgroundColor: '#FFFFFF',
  flex: 1,
  flexDirection: 'row',
 }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
