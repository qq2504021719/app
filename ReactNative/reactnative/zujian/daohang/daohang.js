import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
} from 'react-native';



// file
var Flex = require('../flex/flex');

// view 
var Vies = require('../view/view');

// Texts
var Texts = require('../text/text');

// touchable
var Trouchables = require('../touchable/touchable');

// input
var Inputs = require('../input/input');

//image 
var Images = require('../image/image');

// scrollview
var Scrollviews = require('../scrollview/scrollview');

// scrollview 电影列表
var Dscrollview = require('../scrollview/dscrollview');

//listview
var Listviews = require('../listview/listview');

// listviews
var Listviewss = require('../listview/listviews');

// navigator 
var Navigators = require('../navigator/navigator');

// navigators
var Navigatorss = require('../navigator/navigators');

var daohang = React.createClass({
  // 按钮onPress事件处理方法
  pressPush: function() {
    var FlexRoute = {
      component: Flex
    };
    this.props.navigator.push(FlexRoute);
  },
  // view页面
  ViespressPush: function() {
    var FlexRoute = {
      component: Vies
    };
    this.props.navigator.push(FlexRoute);
  },
  // text页面
  TextspressPush: function() {
    var FlexRoute = {
      component: Texts
    };
    this.props.navigator.push(FlexRoute);
  },
  // touchable页面
  touchablepressPush: function() {
    var FlexRoute = {
      component: Trouchables
    };
    this.props.navigator.push(FlexRoute);
  },
  //input
  InputspressPush: function() {
    var FlexRoute = {
      component: Inputs
    };
    this.props.navigator.push(FlexRoute);
  },
  // image
  ImagespressPush: function() {
    var FlexRoute = {
      component: Images
    };
    this.props.navigator.push(FlexRoute);
  },
  //scrollview
  ScrollviewspressPush: function() {
    var FlexRoute = {
      component: Scrollviews
    };
    this.props.navigator.push(FlexRoute);
  },
  // Dscrollview
  DscrollviewpressPush: function() {
    var FlexRoute = {
      component: Dscrollview
    };
    this.props.navigator.push(FlexRoute);
  },
  //listview
  ListviewspressPush: function() {
    var FlexRoute = {
      component: Listviews
    };
    this.props.navigator.push(FlexRoute);
  },
  // listviews 
  ListviewsspressPush: function() {
    var FlexRoute = {
      component: Listviewss
    };
    this.props.navigator.push(FlexRoute);
  },
  // Navigators
  NavigatorspressPush: function() {
    var FlexRoute = {
      component: Navigators
    };
    this.props.navigator.push(FlexRoute);
  },
  // Navigatorss
  NavigatorsspressPush: function() {
    var FlexRoute = {
      component: Navigatorss
    };
    this.props.navigator.push(FlexRoute);
  },


  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (oldRow, nweRow) => oldRow !== nweRow
    });
    return {
      dataSource: ds.cloneWithRows([
        [{"route":this.pressPush,"msg":'flex'},{"route":this.ViespressPush,"msg":'View'},{"route":this.TextspressPush,"msg":'Text'}],
        [{"route":this.touchablepressPush,"msg":'按钮'},{"route":this.InputspressPush,"msg":'Input'},{"route":this.ImagespressPush,"msg":'Image'}],
        [{"route":this.ScrollviewspressPush,"msg":'列表'},{"route":this.DscrollviewpressPush,"msg":'电影列表'},{"route":this.ListviewspressPush,"msg":'list列表'}],
        [{"route":this.ListviewsspressPush,"msg":'list电影列表'},{"route":this.NavigatorspressPush,"msg":'页面导航'},{"route":this.NavigatorsspressPush,"msg":'带参页面导航'}]
      ])
    };
  },
  // 渲染行组件
  _renderRow: function(data) {
    console.log(data)

    return (
      <View style={[styles.viewRow,styles.row]}>
          <TouchableOpacity style={[styles.flex,styles.btn]} onPress={data[0].route}>
            <Text style={styles.btn_text}>{data[0].msg}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex,styles.btn]} onPress={data[1].route}>
            <Text style={styles.btn_text}>{data[1].msg}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.flex,styles.btn]} onPress={data[2].route}>
            <Text style={styles.btn_text}>{data[2].msg}</Text>
          </TouchableOpacity>
        </View>
    );
  },
  // 渲染头部
  _renderHeader: function() {
    return (
      <View>
        <Text style={styles.title}>导航页</Text>
        <View style={styles.title_view}></View>
      </View>
    );
  },
  render: function() {
    return (
        <ListView 
        style={styles.listViews}
        dataSource={this.state.dataSource} 
        renderRow={this._renderRow} 
        />
    );
  }
});

var styles = StyleSheet.create({
  listViews: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  flex:{
    flex:1,
  },
  title:{
    marginTop:20,
    height:50,
    fontSize:30,
    fontWeight:"bold",
    marginLeft:10,
    color:"#9999CC",
  },
  title_view:{
    borderBottomWidth:1,
    borderColor:"#9999CC",
  },
  row:{
    flexDirection: "row",
  },
  viewRow:{
    marginTop:2,
    height:60,
  },
  btn:{
    marginTop:10,
    height:40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#9999CC",
    marginLeft:5,
    marginRight:5,
  },
  btn_text:{
    color:"#FFF",
  }
});




// 导出模块
module.exports = daohang;