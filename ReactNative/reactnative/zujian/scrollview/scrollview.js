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
	ScrollView,
	RefreshControl,
} from 'react-native';

/*
 * 实现检测拖拽、滑动的相关方法
 * 添加几个子组件
 */
var Dhheader = require('../daohang/dhheader');
var ScrollViews = React.createClass({
	_onScrollBeginDrag: function() {
		console.log('开始拖拽');
	},
	_onScrollEndDrag: function() {
		console.log('结束拖拽');
	},
	_onMomentumScrollBegin: function() {
		console.log('开始滑动');
	},
	_onMomentumScrollEnd: function() {
		console.log('滑动结束');
	},
	_onRefresh: function() {
		console.log('刷新');
	},
	render: function() {
		return (
			<View style={styles.tflex}>
        	<Dhheader navigators={this.props.navigator}></Dhheader>
				<View style={styles.container}>
					<ScrollView style={styles.scrollview} 
					showsVerticalScrollIndicator={true} 
					onScrollBeginDrag={this._onScrollBeginDrag} 
					onScrollEndDrag={this._onScrollEndDrag} 
					onMomentumScrollBegin = {this._onMomentumScrollBegin} 
					onMomentumScrollEnd = {this._onMomentumScrollEnd} 
					refreshControl={
						<RefreshControl refreshing={false}
						tintColor="red" 
						title="正在刷新PL" 
						onRefresh={this._onRefresh}
						/>
					}>
						<View style={styles.view_1}></View>
						<View style={styles.view_2}></View>
						<View style={styles.view_3}></View>
					</ScrollView>
				</View>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	tflex: {
	    flex: 1,
	    backgroundColor: "#F5FCFF",
	  },
	container: {
		flex: 1,
		backgroundColor: "cyan",
	},
	scrollview: {
		marginTop: 25,
		backgroundColor: "#CCCCCC",
	},
	view_1: {
		margin: 15,
		flex: 1,
		height: 300,
		backgroundColor: "yellow",
	},
	view_2: {
		margin: 15,
		flex: 1,
		height: 300,
		backgroundColor: "blue",
	},
	view_3: {
		margin: 15,
		flex: 1,
		height: 300,
		backgroundColor: "green",
	},
});

// 导出模块
module.exports = ScrollViews;