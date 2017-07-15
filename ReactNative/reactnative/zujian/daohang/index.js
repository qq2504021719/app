import React, {
  Component
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

// 导航路由

var daohangn = require('./daohangn');

var Daohindex = React.createClass({

	render: function() {
		return (
			<View style={styles.flex}>
				<Daohang></Daohang>
			</View>
        	
		);
	}
});

var styles = StyleSheet.create({
  flex:{
    flex:1,
  },
});

// 导出模块
module.exports = Daohindex;