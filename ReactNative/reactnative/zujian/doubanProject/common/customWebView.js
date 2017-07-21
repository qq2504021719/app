/*
 * 实现功能:封装WebView,根据传入的url展示网页信息
 *
 * 包含组件:Header、WebView
 *
 * 外部传入:
 * 给Header设置:navigator、initObj(backName、title)
 * 给WebView设置:source
 * 
 * WebView 组件属性说明
 * startInLoadingState 初始加载的显示状态,是否显示loading
 * contentInset 隐藏网页本身的头部底部
 */

import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View,  
  WebView, 
} from 'react-native';

var Header = require('./Header');

var CustomWebView = React.createClass({
	render:function(){
		return (
			<View style={{backgroundColor:"white",flex:1,}}>
				<Header navigator={this.props.navigator} initObj={{
					backName:this.props.backName,
					BarTitle:this.props.BarTitle
				}}/>
				<WebView 
				startInLoadingState={true}
				contentInset={{top:-44,bottom:-120,}}
				source={{url:this.props.url}}
				/>
				}
				}
			</View>
		);
	}
});

var styles = StyleSheet.create({

});

module.exports = CustomWebView;