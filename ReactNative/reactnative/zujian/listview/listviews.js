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
	Image
} from 'react-native';


// 冲文件中读取数据.执行了JSON.parse(),将json格式的字符串转换为json格式的对象
var movieData = require('./data.json');
var Dhheader = require('../daohang/dhheader');
// 获取所有movies数据
var movies = movieData.movies;

var ListViewss = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({
			rowHasChanged: (oldRow, nweRow) => oldRow !== nweRow
		});
		return {
			dataSource: ds.cloneWithRows(movies)
		};
	},
	// 渲染行组件
	_renderRow: function(movie) {
		return (
			<View style={styles.row}>
				<Image style={styles.thumbnail} source={{uri:movie.posters.thumbnail}} />
				<View style={styles.rightContainer}>
					<Text style={styles.title}>{movie.title}</Text>
					<Text style={styles.year}>{movie.year}</Text>
				</View>
			</View>
		);
	},
	// 渲染头部
	_renderHeader: function() {
		return (
			<View style={styles.header}>
				<Text style={styles.header_text}>Movies List</Text>
				<View style={styles.separator}></View>
			</View>
		);
	},
	// 渲染分割线
	_renderSeparator: function(sectionID: number, rowID: number) {
		return (
			<View style={styles.separator} key={sectionID+rowID}></View>
		);
	},
	render: function() {
		return (
			<View style={styles.tflex}>
	        	<Dhheader navigators={this.props.navigator}></Dhheader>
				<ListView  
				style={styles.listViews}
				dataSource={this.state.dataSource} 
				renderRow={this._renderRow} 
				renderHeader={this._renderHeader} 
				renderSeparator={this._renderSeparator} 
				initialListSize={5}
				/>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	tflex: {
	    flex: 1,
	    backgroundColor: "#F5FCFF",
	},
	listViews: {
		flex: 1,
		marginTop: 25,
		backgroundColor: "#F5FcFF",
	},
	row: {
		// marginLeft: 5,
		// marginRight: 5,
		// marginTop: 5,
		flexDirection: "row",
		padding: 5,
		backgroundColor: "#F5FCFF",
		// borderWidth: 1,
		// borderColor: "#000",
	},
	thumbnail: {
		width: 53,
		height: 81,
		backgroundColor: "gray",
	},
	rightContainer: {
		marginLeft: 10,
		flex: 1,
	},
	title: {
		fontSize: 18,
		marginTop: 3,
		marginBottom: 3,
	},
	year: {
		marginBottom: 3,
	},

	// header组件的样式
	header: {
		height: 44,
		backgroundColor: "#F5FCFF",
	},
	header_text: {
		flex: 1,
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 44,
	},

	// 分割线组件样式
	separator: {
		height: 1,
		backgroundColor: "#F5FCFF",
	},

});

// 导出模块
module.exports = ListViewss;