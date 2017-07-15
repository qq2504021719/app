/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 路由传参数
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
	TextInput,
} from 'react-native';

var Dhheader = require('../daohang/dhheader');
// 页面A
var InputPage = React.createClass({
	getInitialState:function(){
		return {
			// 记录输入框的值
			content:" "
		};
	},
	// 获取input框的值
	getInputContent:function(text){
		// 讲输入框的值进行记录
		this.setState({
			content:text
		});
	},
	// 按钮onPress事件处理方法,并传值
	pressPush: function() {
		var BRoute = {
			component: DetailPage,
			// 将输入框的内容传递给下一级页面
			passProps:{
				showText:this.state.content
			}
		};
		this.props.navigator.push(BRoute);
	},
	render: function() {
		return (
			<View style={styles.tflex}>
	        	<Dhheader navigators={this.props.navigator}></Dhheader>
				<View style={inputStyle.container}>
					<TextInput style={inputStyle.input} placeholder="请输入内容" onChangeText={this.getInputContent} />
					<TouchableOpacity style={styles.btn} onPress={this.pressPush}>
						<Text>带参跳转B页面</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
});

var inputStyle = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor:"#F5F5F5",
	},
	input:{
		width:300,
		height:45,
		marginLeft:25,
		marginRight:25,
		paddingLeft:5,
		borderWidth:1,
		borderColor:"black",
		borderRadius:4,
	}
});

// 页面B
var DetailPage = React.createClass({
	// 按钮pressPop事件处理方法
	pressPop: function() {
		var ARoute = {
			component: InputPage
		};
		this.props.navigator.push(ARoute);
	},
	render: function() {
		return (
			<View style={detailStyle.container}>
				<Text style={detailStyle.text}>{this.props.showText}</Text>
				<TouchableOpacity style={styles.btn} onPress={this.pressPop}>
					<Text>返回输入页面</Text>
				</TouchableOpacity>
			</View>
		);
	}
});

var detailStyle = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor:"#F5F5F5",
	},
	text:{
		marginLeft:25,
		marginRight:25,
		padding:25,
		backgroundColor:"#99CCCC",
		textAlign:"center",
	},
});

var Navigatorss = React.createClass({
	render: function() {
		var rootRoute = {
			component: InputPage,
			// 存储需要传递的内容
			passProps:{

			}
		};
		return (
			<View style={styles.flex}>
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
						{...route.passProps}
						/>
					);
				}
			}
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
	flex: {
		flex: 1,
	},
	btn: {
		marginTop:20,
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
module.exports = Navigatorss;