/*
 * 图书列表模块:搜索栏,图书列表
 * 图书列表的内容:通过调用图书搜索接口获得多条图书数据
 * 图书列表Item是单独封装的
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
  FlatList,
  ScrollView,  
} from 'react-native'; 
// 数据请求
var Util = require('./../common/util');
// 搜索
var SearchBar = require('./../common/searchBar');
// url配置文件
var ServiceUrl = require('./../common/service');
// 列表组件
var BookItem = require('./book_item');
// 对应页面详情 
var BookDetail = require('./book_detail');

var BookList = React.createClass({
	getInitialState:function(){
		return {
			// dataSource
			dataSource:'',
			// 网络请求状态标识
			show:false,
			// 搜索关键字,作用: 1、搜索接口需要设置搜索内容。2.点击搜索按钮时,修改关键字内容,重新请求数据,重新渲染
			keywords:"React"
		};
	},
	getData:function(){
		// 开启loading,每次搜索时都需要显示
		this.setState({
			show:false
		});
		// 请求数据
		var that = this;
		var url = ServiceUrl.book_search+"?count=20&q="+this.state.keywords;
		Util.getRequest(url,function(data){
			// 请求成功回调函数,如果没有相关书籍,要alert提示
			if(!data.books || data.books.length == 0){
				return alert("未查询到相关书籍");
			}
			// 设置下载状态和数据源
			that.setState({
				show:true,
				dataSource:data.books
			});
		},function(error){
			// 请求失败回调函数
			alert(error);
		})
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
	_showDetail:function(bookID){
		var detailRoute = {
			component:BookDetail,
			passProps:{
				bookID:bookID
			}
		};
		this.props.navigator.push(detailRoute);
	},
	render:function(){
		return (
			<ScrollView>
				<SearchBar 
				placeholder="请输入图片的名称" 
				onPress={this._searchPress} 
				onChangeText={this._changeText}/>
				{
					this.state.show ? 
					<FlatList 
					style={{flex:1,borderWidth:1,borderColor:"#CCCCCC",margin:5,}}
					data={this.state.dataSource}
			        renderItem={this._renderItem}
			        getItemLayout={(data, index) => ( {length:120, offset: 40 * index, index} )}
			        onEndReached = {this._onEndReached}
			        onEndReachedThreshold = {0.1}
					/> 
					: Util.loading
				}
			</ScrollView>
		);
	},
	componentDidMount:function(){
		// 请求数据
		this.getData();
	},
	// 渲染行
	_renderItem:function({item}){
		return <BookItem book={item} onPress={this._showDetail.bind(this,item.id)} />
	},
	// 页面到滑动到底部
	_onEndReached:function(){
		alert('123123');
	}
});

var styles = StyleSheet.create({

});

module.exports = BookList;