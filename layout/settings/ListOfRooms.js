import React, { Component } from 'react';
import {
  ListView
} from 'react-native';
import MyAccordion from './MyAccordion.js';

export default class ListOfRooms extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
    };
  }
  componentDidMount() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    fetch('http://jarvis.jarvisnet.ga:8165/test.php').then((loadedData) => {
        this.setState({ dataSource: ds.cloneWithRows(JSON.parse(loadedData._bodyInit)) });
    }).catch((error) => {
      console.log('Error... ' + error);
    });
  } 
  renderCollapsibleRow(rowData) {
    return (
      <MyAccordion
        state={rowData}
      />
    );
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
}
