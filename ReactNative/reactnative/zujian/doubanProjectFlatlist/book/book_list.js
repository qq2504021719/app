'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  Animated,
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
} = ReactNative;


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


var FlatListExample = React.createClass({
	getInitialState:function(){
	return {
	  loading:false, // 页面加载
	  footloading:false,//上拉加载
	  footstr:'数据加载中',
	  // dataSource
	  dataSource:'',
	  // 网络请求状态标识
	  show:false, // 下拉刷新
	  // 搜索关键字,作用: 1、搜索接口需要设置搜索内容。2.点击搜索按钮时,修改关键字内容,重新请求数据,重新渲染
	  keywords:" ",
	  page : 1, // 第几页
	  pagenum:10 // 页面数量
	};
	},
	// 对象合并
	_objectHebing:function(obj1,obj2){
	for(var i = 0;i<obj2.length;i++){
	  obj1.push(obj2[i]);
	}
	return obj1;
	},
	getData:function(pages){
	// 开启loading,每次搜索时都需要显示
	this.setState({
	  show:false
	});
	// 请求数据
	var that = this;
	var url = 'http://hr.trc-demo.com/api/androidbook_page/'+that.state.keywords+'/'+pages+'/'+that.state.pagenum;
	Util.getRequest(url,function(data){
	  // 请求成功回调函数,如果没有相关书籍,要alert提示
	  if(!data || data.length == 0){
	  	that.setState({
	      footstr:'暂无数据'
	    });
	  	
	    return alert("未查询到相关书籍");
	  }
	  if(that.state.dataSource != " " && that.state.dataSource != "undefined" && that.state.dataSource.length != 0){
	    var dtats = that._objectHebing(that.state.dataSource,data);
	    // 设置下载状态和数据源
	    that.setState({
	      show:false,
	      loading:true,
	      footloading:false,
	      dataSource:dtats
	    });
	  }else{
	    that.setState({
	      show:false,
	      loading:true,
	      footloading:false,
	      dataSource:data
	    });
	  }
	  
	},function(error){
	  // 请求失败回调函数
	  alert(error);
	})
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
	_renderItem:function({item}){
	return (
	  // <View style={styles.item}><View style={styles.imageContainer}><Image style={styles.image} source={{uri:item.image}} /></View><Text style={styles.text}>{item.title}</Text></View>
	  <BookItem book={item} onPress={this._showDetail.bind(this,item.doubanId)} />
	);
	},
	// TextInput的onChangeText事件处理方法,输入记录
	_changeText:function(text){
		this.setState({
			keywords:text
		});
	},
	// 点击搜索按钮,网络请求
	_searchPress:function(){
		this.setState({
	      show:true,
	      page:1,
	      dataSource:''
	    });
	    // 请求数据
	    this.getData(1);
	},
	render:function(){
		return (
			<View>
			
			<SearchBar 
			placeholder="请输入图片的名称" 
			onPress={this._searchPress} 
			onChangeText={this._changeText}/>
			{
			this.state.loading ? 
				<View style={{marginBottom:110,}}>
				<FlatList
				  data={this.state.dataSource}
				  renderItem={this._renderItem}
				  getItemLayout={(data, index) => ( {length:120, offset: 40 * index, index} )}
				  onRefresh = {this._onRefresh}
				  refreshing = {this.state.show}
				  onEndReached = {this._onEndReached}
				  ListFooterComponent = {this._ListFooterComponent}
				  onEndReachedThreshold = {0.1}
				/>
				</View>
			: Util.loading
			}
			</View>
		);
	},
	// 首次加载
	componentWillMount:function(){
	var pages = this.state.page;
	// 请求数据
	this.getData(pages);
	},
	// 上拉刷新数据
	_onRefresh:function(){
		this.setState({
	      show:true,
	      page:1,
	      loading:false,
	      dataSource:''
	    });
	    // 请求数据
	    this.getData(1);
	},
	// 下拉请求数据
	_onEndReached:function(){
		if(this.state.dataSource != ''){
		  var pages = this.state.page+1;
		  this.setState({
		    page:pages,
		    footloading:true
		  });
		  // 请求数据
		  this.getData(pages);
		}
	},
	// 尾部组件
	_ListFooterComponent:function(){
		return (
			<View style={styles.footView}>{Util.loadingw}</View>
		);
	}
});


var styles = StyleSheet.create({
  item:{
    flexDirection:"row",
    height:120,
    padding:10,
  },
  imageContainer:{
    justifyContent:"center",
    alignItems:"center",
  },
  image:{
    width:80,
    height:100,
  },
  text:{
    fontSize:25,
    marginLeft:10,
    marginTop:10,
  },
  footView:{
  	height:50,
  	justifyContent:"center",
    alignItems:"center",
  },
  foottext:{
  	color:"#CCCCCC",
  }
}); 

module.exports = FlatListExample;