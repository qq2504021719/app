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

var data = [
  {key:'a',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'b',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'c',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'d',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'e',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'f',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'g',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'h',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'i',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'j',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'k',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'m',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'l',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'n',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'o',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'p',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'q',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'u',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'v',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'w',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'ww',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'www',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'wwww',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'},
  {key:'wwwww',uri:'http://i-7.vcimg.com/trim/a5c06f84236da8c3081a08bef96cc967313940/trim.jpg'}
];
var Util = require('./../doubanProjectFlatlist/common/util');
var FlatListExample = React.createClass({
  getInitialState:function(){
    return {
      // dataSource
      dataSource:'',
      // 网络请求状态标识
      show:false,
      // 搜索关键字,作用: 1、搜索接口需要设置搜索内容。2.点击搜索按钮时,修改关键字内容,重新请求数据,重新渲染
      keywords:" "
    };
  },
  getData:function(){
    // 开启loading,每次搜索时都需要显示
    this.setState({
      show:false
    });
    // 请求数据
    var that = this;
    var url = 'http://hr.trc-demo.com/api/androidbook_page/%20/1/2';
    Util.getRequest(url,function(data){
      // 请求成功回调函数,如果没有相关书籍,要alert提示
      if(!data || data.length == 0){
        return alert("未查询到相关书籍");
      }
      if(that.state.dataSource != " " && that.state.dataSource != "undefined" && that.state.dataSource.length != 0){
        alert('3333');
        var datas = Object.assign(that.state.dataSource,data);
        // 设置下载状态和数据源
        that.setState({
          show:false,
          dataSource:datas
        });
      }else{
        alert('2222');
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
              show:true
            });
            // 请求数据
            this.getData();
          }}
          refreshing = {this.state.show}
          // onEndReached = {this._onEndReached}
          // onEndReachedThreshold = {0.1}
        />
      </View>
    );
  },
  componentWillMount:function(){
    this.setState({
      show:true
    });
    // 请求数据
    this.getData();
  },
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