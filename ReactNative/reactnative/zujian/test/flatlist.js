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


var Util = require('./../doubanProjectFlatlist/common/util');


var FlatListExample = React.createClass({
  getInitialState:function(){
    return {
      // dataSource
      dataSource:'',
      // 网络请求状态标识
      show:false,
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
    var url = 'http://hr.trc-demo.com/api/androidbook_page/%20/'+pages+'/'+that.state.pagenum;
    Util.getRequest(url,function(data){
      // 请求成功回调函数,如果没有相关书籍,要alert提示
      if(!data || data.length == 0){
        return alert("未查询到相关书籍");
      }
      if(that.state.dataSource != " " && that.state.dataSource != "undefined" && that.state.dataSource.length != 0){
        var dtats = that._objectHebing(that.state.dataSource,data);
        // 设置下载状态和数据源
        that.setState({
          show:false,
          dataSource:dtats
        });
      }else{
        that.setState({
          show:false,
          dataSource:data
        });
      }
      
    },function(error){
      // 请求失败回调函数
      alert(error);
    })
  },
  _renderItem:function({item}){
    return (
      <View style={styles.item}><View style={styles.imageContainer}><Image style={styles.image} source={{uri:item.image}} /></View><Text style={styles.text}>{item.title}</Text></View>
    );
  },
  render:function(){
    return (
      <View style={{flex:1,margin:20,}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this._renderItem}
          getItemLayout={(data, index) => ( {length:120, offset: 40 * index, index} )}
          onRefresh = {()=>{
            this.setState({
              show:true,
              page:1,
              dataSource:''
            });
            // 请求数据
            this.getData(1);
          }}
          refreshing = {this.state.show}
          onEndReached = {this._onEndReached}
          onEndReachedThreshold = {0.1}
        />
      </View>
    );
  },
  componentWillMount:function(){
    var pages = this.state.page;
    this.setState({
      show:true
    });
    // 请求数据
    this.getData(pages);
  },
  _onEndReached:function(){
    if(this.state.dataSource != ''){
      var pages = this.state.page+1;
      this.setState({
        show:true,
        page:pages
      });
      // 请求数据
      this.getData(pages);
    }
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
  }
}); 

module.exports = FlatListExample;