/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// input
var Input = require('./zujian/input/input');
// image
var Images = require('./zujian/image/image');

export default class reactnative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Images></Images>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('reactnative', () => reactnative);