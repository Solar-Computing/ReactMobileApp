import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  ScrollView
} from 'react-native';
import styles from './feed_style.js';


var API_URL = 'https://itunes.apple.com/search';
var LOADING = {};
var resultsCache = {
    dataForQuery: {}
};

class DataList extends Component {
    constructor() {
        super();

        this.state ={
            isLoading: false,
            query: '',
            resultsData: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 != row2,})
        };
    }
    render() {
      return(
          <ScrollView>
          <ListView
            dataSource={this.state.resultsData}
            renderRow={this.renderRow}
            renderSeperator={this.renderSeperator}
            automaticallyAdjustContentInsets={false}
          />
          </ScrollView>
      );
  }

  renderSeperator(
      sectionID: number | string,
      rowID: number | string,
      adjacentRowHighlighted: boolean
  ) {
      return (
          <View
            key={"SEP_" + sectionID + "_" + rowID}
            style={[styles.rowSeparator, adjacentRowHighlighted && styles.rowSeparatorHighlighted]}
          />
      );
  }

  renderRow(
      data: Object,
      sectionID: number | string,
      rowID: number | string,
      highlightRowFunction: (sectionID: ?number | string, rowID: ?number | string) => void
  ) {
     return (
         <View>
            <View style={styles.cellContainer}>
                <Image
                    source={{uri: data.artworkUrl100}}
                    style={styles.cellImage}
                />
                <Text>{data.trackName}</Text>
            </View>
         </View>
     );
  }

  getDataSource (dataItems: Array<any>): ListView.DataSource {
      return this.state.resultsData.cloneWithRows(dataItems);
  }

  componentDidMount () {
      this.searchApi('harry potter');
  }

  searchApi(query: string) {

      this.setState({ query: query});

      var cachedResultsForQuery = resultsCache.dataForQuery[query];
      if (cachedResultsForQuery) {
          if (!LOADING[query]) {
              this.setState({
                  isLoading: false,
                  resultsData: this.getDataSource(cachedResultsForQuery)
              });
              //return cachedResultsForQuery;
          } else {
              this.setState({
                  isLoading: true
              });
          }
      } else {
          var queryURL = this._urlForQuery(query);

          if(!queryURL) return;

          this.setState({
              isLoading: true
          });

          LOADING[query] = true;
          resultsCache.dataForQuery[query] = null;
          fetch(this._urlForQuery(query))
            .then((response) => response.json())
            .catch((error) => {
                LOADING[query] = false;
                resultsCache.dataForQuery[query] = undefined;
                this.setState({
                    isLoading: false,
                    resultsData: this.getDataSource([])
                });

            })
            .then((responseData) => {
                LOADING[query] = false;
                resultsCache.dataForQuery[query] = responseData.results;
                this.setState({
                    isLoading: false,
                    resultsData: this.getDataSource(resultsCache.dataForQuery[query])
                });
            })
          ;
      }
  }
  _urlForQuery(query: string): string {
      if (query) {
          return API_URL + '?media=movie&term=' + encodeURIComponent(query);
      } else {
          return API_URL + '?media=movie&term=mission+impossible';
      }
  }
}

export default DataList;
