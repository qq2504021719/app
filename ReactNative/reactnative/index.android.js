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


// 电影列表
var reactnative = require('./zujian/fetch/fetchmovielist');

AppRegistry.registerComponent('reactnative', () => reactnative);