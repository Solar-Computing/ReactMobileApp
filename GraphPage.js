// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image
// } from 'react-native';

// class AwesomeProject extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <LotsOfGreetings names='Aayush' />
//         <LotsOfGreetings names='Leonie' />
//         <LotsOfGreetings names='Sujeeth' />
//         <LotsOfGreetings names='Tommy' />
//       </View>
//     );
//   }
// }

// class LotsOfGreetings extends Component {
//   render() {
// //     let pic = {
// //       uri: 'http://frostney.github.io/talks/react-native/slides/images/meme2.jpg'
// //       uri: 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg'
// //     };
//     return (
// //       <Image source={pic} style={{width: 193, height: 11}}/>
//       <Text>Hello {this.props.names}!</Text>
//     );
//   }
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5FCFF',
// //   },
// //   welcome: {
// //     fontSize: 20,
// //     textAlign: 'center',
// //     margin: 10,
// //   },
// //   instructions: {
// //     textAlign: 'center',
// //     color: '#333333',
// //     marginBottom: 5,
// //   },
// // });

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  PropTypes,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  Animated,
  Switch
} from 'react-native';

import { BarChart } from 'react-native-charts'

import Chart from 'react-native-chart';
import graphStyles from './graphStyles.js';

class GraphPage extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>

      <SimpleChart/>

      <Player/>

      </View>
    );
  }
}
 
const data = [
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
];
 
class SimpleChart extends Component {
    render() {
        return (
            <View style={graphStyles.container}>
                <Chart
                    style={graphStyles.chart}
                    data={data}
                    verticalGridStep={5}
                    type="bar"
                 />
            </View>
        );
    }
}


class Player extends Component {
  constructor () {
    super()
    const width = {pts: 300, ast: 200, reb: 100}
    this.state = {
      pts: new Animated.Value(width.pts),
      ast: new Animated.Value(width.ast),
      reb: new Animated.Value(width.reb),
      fadeAnim: new Animated.Value(0)
    }
  }
  
  componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue: 1}            // Configuration
     ).start();                // Don't forget start!
   }
  
  handeleAnimation () {
    const timing = Animated.timing
    const width = {pts: 30, ast: 20, reb: 10}
    const indicators = ['pts', 'ast', 'reb']
    Animated.parallel(indicators.map(item => {
      return timing(this.state[item], {toValue: width[item]})
    })).start()
  }
  
  render () {
   const {pts, ast, reb, stl, blk, tov, min} = this.state
  
   return (
      <View>
       {pts &&
          <Animated.View style={[graphStyles.bar, graphStyles.points, {width: pts}]} />
        }
        {ast &&
          <Animated.View style={[graphStyles.bar, graphStyles.assists, {width: ast}]} />
        }
        {reb &&
          <Animated.View style={[graphStyles.bar, graphStyles.rebounds, {width: reb}]} />
        }
        <Text onPress={this.handeleAnimation.bind(this)}>Button</Text>
      </View>
   )
  }
}

// const styles = StyleSheet.create({
//   container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
//   // Item
//   item: {
//     flexDirection: 'column',
//     marginBottom: 5,
//     paddingHorizontal: 10
//   },
//   label: {
//     color: '#CBCBCB',
//     flex: 1,
//     fontSize: 12,
//     position: 'relative',
//     top: 2
//   },
//   data: {
//     flex: 2,
//     flexDirection: 'row'
//   },
//   dataNumber: {
//     color: '#CBCBCB',
//     fontSize: 11
//   },
//   // Bar
//   bar: {
//     alignSelf: 'center',
//     borderRadius: 5,
//     height: 8,
//     marginRight: 5
//   },
//   points: {
//     backgroundColor: '#F55443'
//   },
//   assists: {
//     backgroundColor: '#FCBD24'
//   },
//   rebounds: {
//     backgroundColor: '#59838B'
//   },
//   steals: {
//     backgroundColor: '#4D98E4'
//   },
//   blocks: {
//     backgroundColor: '#418E50'
//   },
//   turnovers: {
//     backgroundColor: '#7B7FEC'
//   },
//   minutes: {
//     backgroundColor: '#3ABAA4'
//   },
//   // controller
//   controller: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 15
//   },
//   button: {
//     flex: 1,
//     position: 'relative',
//     top: -1
//   },
//   chevronLeft: {
//     alignSelf: 'flex-end',
//     height: 28,
//     marginRight: 10,
//     width: 28
//   },
//   chevronRight: {
//     alignSelf: 'flex-start',
//     height: 28,
//     marginLeft: 10,
//     width: 28
//   },
//   date: {
//     color: '#6B7C96',
//     flex: 1,
//     fontSize: 22,
//     fontWeight: '300',
//     height: 28,
//     textAlign: 'center'
//   },
//   chart: {
//         width: 200,
//         height: 200,
//     }
// })

class FadeInView extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
     };
   }
   componentDidMount() {
     Animated.timing(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue: 1}            // Configuration
     ).start();                // Don't forget start!
   }
   render() {
     return (
       <Animated.View          // Special animatable View
         style={{opacity: this.state.fadeAnim}}>
         <Text>Hello {this.props.names}!</Text>
       </Animated.View>
     );
   }
 }

class LotsOfGreetings extends Component {
  render() {
//     let pic = {
//       uri: 'http://frostney.github.io/talks/react-native/slides/images/meme2.jpg'
//       uri: 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg'
//     };
    return (
//       <Image source={pic} style={{width: 193, height: 11}}/>
      <Text>Hello {this.props.names}!</Text>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('GraphPage', () => GraphPage);

export default GraphPage;