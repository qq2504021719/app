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
  View,
  TouchableOpacity,
  // StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

var HomeScreen = require('./HomeScreen');
var ChatScreen = require('./ChatScreen');



const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});



// 隐藏状态栏M
// StatusBar.setHidden(true);





var styles = StyleSheet.create({

});


// 导出模块
module.exports = SimpleApp;