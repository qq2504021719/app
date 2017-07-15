/*
 * 公共头部
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
} from 'react-native';

var Daohangn = require('./daohang');

var Dhheader = React.createClass({
	pressPushc: function() {
    var ABRoute = {
      component: Daohangn
    };
    this.props.navigators.push(ABRoute);
  },
	render: function() {
		return (
				<View style={styles.conation}>
				<TouchableOpacity onPress={this.pressPushc}>
					<Text style={styles.title}>返回导航页</Text>
				</TouchableOpacity>
		    	<View style={styles.title_view}></View>
		    </View>
		);
	}
});

var styles = StyleSheet.create({
  conation:{
  	backgroundColor:"#666699",
  },
  flex:{
    flex:1,
  },
  title:{
    marginTop:20,
    height:50,
    fontSize:30,
    fontWeight:"bold",
    marginLeft:10,
    color:"#FFF",
  },
  title_view:{
    borderBottomWidth:1,
    borderColor:"#FFF",
  },
});

// 导出模块
module.exports = Dhheader;