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
	Image,
} from 'react-native';

/*
 * https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json
 * 
 */
var Dhheader = require('../daohang/dhheader');
// 重文件中读取数据.执行了JSON.parse(),将json格式的字符串转换为json格式的对象
var movieData = require('./data.json');

// 获取所有movies数据
var movies = movieData.movies;

var DScrollViews = React.createClass({
	render: function() {
		// 创建电影列表组件。
		var moviesRows = [];
		for (var i in movies) {
			var movie = movies[i];
			// 创建组件 显示电影信息:图像、电影名称、上映时间
			var row = (
				<View key={i} style={styles.row}>
					<Image style={styles.thumbnail} source={{uri:movie.posters.thumbnail}} />
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{movie.title}</Text>
						<Text style={styles.year}>{movie.year}</Text>
					</View>
				</View>
			);
			moviesRows.push(row);
		}
		return (
			<View style={styles.tflex}>
	        	<Dhheader navigators={this.props.navigator}></Dhheader>
				<View style={styles.container}>
					<ScrollView style={styles.scrollView}>
						{moviesRows}
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
	},
	scrollView: {
		flex: 1,
		marginTop: 25,
		backgroundColor: "#F5FcFF",
	},
	row: {
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5,
		flexDirection: "row",
		padding: 5,
		backgroundColor: "#F5FCFF",
		borderWidth: 1,
		borderColor: "#000",
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
});

// 导出模块
module.exports = DScrollViews;