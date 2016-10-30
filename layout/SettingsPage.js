import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  ScrollView,
  Switch
} from 'react-native';
import Accordion from 'react-native-accordion';
import styles from './styles.js';

class SettingsPage extends Component {
  render() {
    return (
      <ScrollView style={null}>
        <ListOfRooms data={{}}></ListOfRooms>
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
  componentDidMount() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    console.log("fetching...");
    fetch("http://jarvis.jarvisnet.ga:8165/test.php").then((loadedData) => {
        console.log(loadedData._bodyInit);
        this.setState({dataSource: ds.cloneWithRows(JSON.parse(loadedData._bodyInit))});
    }).catch((error) => {
      console.log("Error..." + error);
    });
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderCollapsibleRow}
        enableEmptySections={true}
      />
    );
  }
  ///
  renderCollapsibleRow(rowData) {
    var header = (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{rowData.name}</Text>
      </View>
    );

    var content = (
      <RoomOptions data={rowData.sockets}></RoomOptions>
    );
 ///
    return (
      <Accordion
        header={header}
        content={content}
      />
    );
  }
}
///
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
    ///
    renderOptionRow(rowData) {
      return (
        <View style={styles.contentView}>
          <View><Text style={styles.contentText}>{rowData.name}</Text></View>
          <View style={{flex: 1, flexDirection: 'row', padding: 20, justifyContent: 'flex-end'}}><OnOffSwitch state={rowData.state}></OnOffSwitch></View>
        </View>
        );
    }
  }
///
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

export default SettingsPage;