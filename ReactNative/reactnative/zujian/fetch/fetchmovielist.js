/**
 * 为获得数据时,显示等待页面,获得数据时,显示电影列表页面

 * 需要给state添加一个属性,用于记录下载状态

 * 数据请求地址 https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json
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
// var movieData = require('../listview/data.json');
// 获取所有movies数据 movieData.movies
var movies = '';

var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json";

var Fetchmovielist = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({
			rowHasChanged: (oldRow, nweRow) => oldRow !== nweRow
		});
		return {
			dataSource: ds,
			loaded:false // 数据是否下载成功的标识
		};
	},
	// 下载数据
	getReuquest:function(){
	  var opts = {
	    method:"GET"
	  }
	//返回一个带有文本的对象
	  fetch(REQUEST_URL,opts)
	  .then((response) => {
	    return response.json(); 
	  })
	  .then((responseData)=>{
	  	// 展示listview组件
		this.setState({
			loaded:true,
			dataSource:this.state.dataSource.cloneWithRows(responseData.movies)
		}); 
		// movies = responseJson.movies;
	  })
	  .catch((error)=>{
	    alert(error);
	  })
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
		// 如果未请求到数据,提示"等待加载页面"
		if(!this.state.loaded){
			return this.renderloaded();
		}
		// 返回电影列表
		return (
			<View style={styles.tflex}>
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
	},
	// 组件挂载完成
	componentDidMount:function(){
		// 组件挂载后开始下载数据
		this.getReuquest();
	},
	// 等待加载页面
	renderloaded:function(){
		return (
			<View style={styles.loadingC}><Text style={styles.loadingCtext}>数据加载中.....</Text></View>
		);
	}
});

var styles = StyleSheet.create({
	// 加载样式开始
	loadingC: {
		flex: 1,
		marginTop: 25,
		backgroundColor: "#F5FcFF",
		justifyContent: "center",
    	alignItems: "center",
	},
	loadingCtext:{
		fontSize:30,
		fontWeight:"bold",
		textAlign:"center",
		marginLeft:10,
		marginRight:10,
	},
	// 加载样式结束
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
module.exports = Fetchmovielist;