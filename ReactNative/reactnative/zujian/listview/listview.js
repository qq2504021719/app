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
	ListView,
} from 'react-native';


/*
 * 垂直滚动的数据列表
 * section,header
 * ListView.DataSource,给他传递一个普通的数组,在使用dataSource来实例化一个ListView组件
 * ListView实现:row/section组件定义、设置数据
 */

var contents = [
	'PHP',
	'JAVA',
	'Jscript',
	'React',
	'React-Native',
	'H5',
	'CSS3',
	'IOS',
	'Android',
	'UI',
	'Package',
	'Node.js',
	'Laravel',
	'C#',
	'C++',
	'C',
];

var Dhheader = require('../daohang/dhheader');
var ListViews = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({
			// 通过判断,决定渲染哪些行组件,避免全部渲染,提高渲染效率
			rowHasChanged: (oldRow, nweRow) => oldRow !== nweRow
		});
		return {
			/* 
			 * 设置dataSource时,不直接使用提供的原始数据,使用cloneWithRows对数据源进行复制,
			 * 使用复制后的数据源实例化ListView,优势,当原始数据发送变化时,LIstView的dataSource不会改变
			 */
			dataSource: ds.cloneWithRows(contents)
		};
	},
	// 渲染行组件,参数是每行要显示的数据对象
	_renderRow: function(rowData: string) {
		return (
			<View style={styles.rowview}>
				<Text style={styles.content}>{rowData}</Text>
			</View>
		);
	},
	render: function() {
		return (
			<View style={styles.tflex}>
	        	<Dhheader navigators={this.props.navigator}></Dhheader>
				<ListView style={styles.container} dataSource={this.state.dataSource} renderRow={this._renderRow} />
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
		marginTop: 25,
	},
	rowview: {
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
		height: 100,
		margin: 5,
		borderWidth: 1,
		borderColor: "#CCCCCC",
	},
	content: {
		flex: 1,
		fontSize: 20,
		color: "blue",
		lineHeight: 50,
	}

});

// 导出模块
module.exports = ListViews;