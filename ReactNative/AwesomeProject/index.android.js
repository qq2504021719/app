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

// 定义组件
var AwesomeProject = React.createrclass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={[styles.top,styles.border]}>
        
        </View>
        <View style={[styles.bottom,styles.border,{borderWidth:5}]}>
        
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  //外层view
  container: {
    marginTop: 25,
    marginLeft: 30,
    backgroundColor: "#0099CC",
    width: 300,
    height: 400,
  },
  // 上层view
  top: {
    backgroundColor: "#00CCFF",
    width: 280,
    height: 250,
    margin: 10,
  },
  // 下层view
  bottom: {
    backgroundColor: "#00CCCC",
    width: 280,
    height: 110,
    margin: 10,
  },
  border: {
    borderWidth: 3,
    borderColor: "#00CC99",
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);