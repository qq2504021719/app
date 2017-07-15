/*
 * 老版本navigator导航页面
 */
import { Navigator } from 'react-native-deprecated-custom-components';

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
} from 'react-native';



var daohang = require('./daohang');

var daohangn = React.createClass({
	render: function() {
		var rootRoute = {
			component: daohang
		};
		return (
			<Navigator 
			initialRoute={rootRoute} 
			configureScene={
				(route)=>{
					return Navigator.SceneConfigs.PushFromRight;
				}
			} 
			renderScene={
				(route,navigator)=>{
					var Component = route.component;
					return(
						<Component 
						navigator={navigator} 
						route={route}
						/>
					);
				}
			}
			/>
		);
	}
});

var styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  conation:{
  	backgroundColor:"#666699",
  },
  
});

// 导出模块
module.exports = daohangn;