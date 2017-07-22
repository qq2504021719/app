/*
 * 图书详情

 * 图书详情
 * image 图书缩略图
 * title 图书名称
 * publisher 出版社
 * author 作者
 * price 价格
 * pages 图书总页数 
 * summary 图书简介
 * author_intro 作者简介
 */

import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View,  
  ScrollView,
} from 'react-native';  

// url配置文件
var ServiceUrl = require('./../common/service');
// 数据请求
var Util = require('./../common/util');
// 头部返回
var Header = require('./../common/header');
// 列表组件
var BookItem = require('./book_item');

var BookDetail = React.createClass({
	getInitialState:function(){
		return{
			// 图书对象详细信息
			bookData:null
		}
	},
	getData:function(){
		// 请求数据
		var that = this;
		var url = ServiceUrl.book_detail_id+this.props.bookID;
		Util.getRequest(url,function(data){
			that.setState({
				bookData:data
			});
		},function(error){
			// 请求失败回调函数
			alert(error);
		})
	},
	render:function(){
		return (
			<ScrollView style={styles.container}>
				{
					this.state.bookData ?
					<View >
						<Header initObj={{backName:"图书",barTitle:this.state.bookData.title}} navigator={this.props.navigator} />
						<BookItem book={this.state.bookData} />
						<View>
							 <Text style={styles.title}>图书简介</Text>
							 <Text style={styles.text}>{this.state.bookData.summary}</Text>
						</View>
						<View style={{marginTop:10}}>
							 <Text style={styles.title}>作者简介</Text>
							 <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
						</View>
						<View style={{height:55}}></View>
					</View>
					: Util.loading
				}
			</ScrollView>
		);
	},
	// 组件挂载以后网络请求 
	componentDidMount:function(){
		// 请求图书详情
		this.getData();
	}
});

var styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:"white",
	},
	title:{
		fontSize:16,
		marginTop:10,
		marginLeft:10,
		marginBottom:10,
		fontWeight:"bold",
	},
	text:{
		marginLeft:10,
		marginRight:10,
		color:"#000D22",
	},
});

module.exports = BookDetail;