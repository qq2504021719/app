/*
 * 图书列表模块:搜索栏,电影列表
 * 图书列表的内容:通过调用电影搜索接口获得多条图书数据
 * 电影Item是单独封装的
 */

 
import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View,  
  TextInput,
  Image,
  TouchableOpacity,
  ListView,
  ScrollView,  
} from 'react-native'; 
// 数据请求
var Util = require('./../common/util');
// 搜索
var SearchBar = require('./../common/searchBar');
// url配置文件
var ServiceUrl = require('./../common/service');
// 列表组件
var MovieItem = require('./movie_item');

// 页面详情
var MovieWeb = require('./../common/customWebView');

var MovieList = React.createClass({
	getInitialState:function(){
		var ds = new ListView.DataSource({
			rowHasChanged: (oldRow, nweRow) => oldRow !== nweRow
		});
		return {
			// dataSource
			dataSource:ds,
			// 网络请求状态标识
			show:false,
			// 搜索关键字,作用: 1、搜索接口需要设置搜索内容。2.点击搜索按钮时,修改关键字内容,重新请求数据,重新渲染
			keywords:"英雄本色"
		};
	},
	getData:function(){
		// 开启loading,每次搜索时都需要显示
		this.setState({
			show:false
		});
		// 请求数据
		var that = this;
		var url = ServiceUrl.movie_search+"?count=20&q="+this.state.keywords;
		Util.getRequest(url,function(data){
			// 请求成功回调函数,如果没有相关书籍,要alert提示
			if(!data.subjects || data.subjects.length == 0){
				return alert("未查询到相关电影");
			}
			// 设置下载状态和数据源
			var ds = new ListView.DataSource({
				rowHasChanged: (oldRow, nweRow) => oldRow !== nweRow
			});

			var movies = data.subjects;

			that.setState({
				show:true,
				dataSource:ds.cloneWithRows(movies)
			});
		},function(error){
			// 请求失败回调函数
			alert(error);
		});
	},
	// TextInput的onChangeText事件处理方法,输入记录
	_changeText:function(text){
		this.setState({
			keywords:text
		});
	},
	// 点击搜索按钮,网络请求
	_searchPress:function(){
		this.getData();
	},
	// 显示详情页
	_showDetail:function(title,url){
		var detailRoute = {
			component:MovieWeb,
			passProps:{
				backName:"电影",
				barTitle:title,
				url:url

			}
		};
		this.props.navigator.push(detailRoute);
	},
	render:function(){
		return (
			<ScrollView>
				<SearchBar 
				placeholder="请输入电影的名称" 
				onPress={this._searchPress} 
				onChangeText={this._changeText}/>
				{
					this.state.show ? 
					<ListView 
					dataSource={this.state.dataSource} 
					initialListSize={10} 
					renderRow={this._renderRow} 
					renderSeparator={this._renderSeparator} /> 
					: Util.loading
				}
			</ScrollView>
		);
	},
	// 组件挂载完成
	componentDidMount:function(){
		// 请求数据
		this.getData();
	},
	// 渲染行 onPress={this._showDetail.bind(this,movie.alt)}
	_renderRow:function(movie){
		return <MovieItem movie={movie} onPress={this._showDetail.bind(this,movie.title,movie.alt)} />
	},
	// 渲染分割线
	_renderSeparator:function(sectionID:number,rowID:number){
		var style = {
			height:1,
			backgroundColor:"#CCCCCC"
		};
		return <View style={style} key={sectionID+rowID}/>
	}
});

var styles = StyleSheet.create({

});

module.exports = MovieList;