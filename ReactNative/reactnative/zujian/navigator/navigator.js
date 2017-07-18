/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 /*
老版本使用 安装 npm i -S react-native-deprecated-custom-components 官方文档 http://reactnative.cn/docs/0.46/navigation.html#content
 */
import { Navigator } from 'react-native-deprecated-custom-components';
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

/*
 * 应用程序由很多功能视图组成,一个应用中重要的功能之一就是"导航",在ReactNative中成为"路由route"
 * 使用导航器可以让你在应用的不同场景(页面)间进行切换 
 * 
 * 在ReactNative中,有两个实现导航功能的组件:Navigator和NavigatorIOS
 * Navigator支持安卓和IOS,NavigatorIOS支持IOS
 * NavigatorIOS支持IOS比Navigator具有更多的属性和方法,在UI方面可以进行跟多的设置,例如:backButtonIcon、backButtonTitle,onLeftButtonPress等待,比较方便
 * 如果想实现更多的自定义设置,建议使用Navigator
 */

/*
 * 导航器通过路由对象(route)来分辨不同的场景,每个路由对象都对应一个页面组件,开发者设置什么,导航器就显示什么 ，所有route是导航器中重要的一个对象。
 * 三步操作实现导航器功能:
 * 1、设置路由对象(告诉导航器我要显示那个页面)
 * 创建路由对象,对象的内容自定义,但必须包含该场景需要展示的页面组件。
 * 2、场景渲染配置(告诉导航器我要什么样的页面跳转效果)
 * 3、渲染场景(高数导航器如何渲染页面),利用第一步设置的路由对象进行渲染场景
 */

var Dhheader = require('../daohang/dhheader');
// 页面A
var FirstPage = React.createClass({
	// 按钮onPress事件处理方法
	pressPush: function() {
		var BRoute = {
			component: SeconPage
		};
		this.props.navigator.push(BRoute);
	},
	render: function() {
		return (
			<View style={styles.tflex}>
	        	<Dhheader navigatorss={this.props.navigator}></Dhheader>
				<View style={[styles.flex,{backgroundColor:"#6666FF"}]}>
					<TouchableOpacity style={styles.btn} onPress={this.pressPush}>
						<Text>点击进入页面B</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
});

// 页面B
var SeconPage = React.createClass({
	// 按钮pressPop事件处理方法
	pressPop: function() {
		var ARoute = {
			component: FirstPage
		};
		this.props.navigator.push(ARoute);
	},
	render: function() {
		return (
			<View style={[styles.flex,{backgroundColor:"#66CCFF"}]}>
				<TouchableOpacity style={styles.btn} onPress={this.pressPop}>
					<Text>点击进入页面A</Text>
				</TouchableOpacity>
			</View>
		);
	}
});
/*
* 
第一步:initialRoute
这个指定了默认的页面,也就是启动app之后会看到界面的第一屏,
这个对象的属性是自定义的，对象中的内容会在renderScene方法中处理.

备注:必须包含的属性,即component,表示需要渲染的页面组件

第二步:configureScene 场景渲染的配置

第三步:renderScene 渲染场景
参数 : route(第一步场景并设置给导航器的路由对象),navigator(导航器对象)
实现: 给需要显示的组件设置属性
*/
var navigatorss = React.createClass({
	render: function() {
		var rootRoute = {
			component: FirstPage
		};
		return (
			<Navigator 
			initialRoute={rootRoute} 
			configureScene={
				(route)=>{
					return Navigator.SceneConfigs.PushFromRight;
				}
			} 
			renderScene={
				(route,navigator)=>{
					var Component = route.component;
					return(
						<Component 
						navigator={navigator} 
						route={route}
						/>
					);
				}
			}
			/>
		);
	}
});

var styles = StyleSheet.create({
	tflex: {
	    flex: 1,
	    backgroundColor: "#F5FCFF",
	},
	flex: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	btn: {
		width: 150,
		height: 30,
		borderWidth: 1,
		borderColor: "#669999",
		borderRadius: 3,
		justifyContent: "center",
		alignItems: "center",		
	},
});

// 导出模块
module.exports = navigatorss;