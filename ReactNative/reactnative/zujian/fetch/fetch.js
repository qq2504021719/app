/**
 * get post 请求
 */

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
 * 在ReactNative中,使用fetch实现网络请求
 * 使用get和post方式获取数据
 */

/*
 * 在ReactNative中,使用fetch实现网络请求。fetch同XMLHttpReqyest非常类似，是一个封装程度更高的网络API,使用起来很简洁,因为使用了Promise
 * 
 * Promise是异步编程的一种结局方案,比传统的解决方案-回调函数和事件-更合理和更强大。ES6将其写进了语言标准,统一了用法,原生提供了Promise对象。
 *简单来说就是一个容器,里面保存着某个未来才会结束的时间(通常是一个异步操作)的结果。
 *
 * Promise对象代表一个异步操作,有三种状态:Oending(进行中)、Resolved(已完成)、Rejected(已失败).
 *
 * Promise实例生成以后,可以分别指定"完成"和"失败"状态的回调函数,实现方式:链式调用方法.fetch中使用的就是该特性
 *
 * 语法
 *fetch(参数)
 * .then(完成的回调函数)
 * .catch(失败的回调函数)
 *
 * opts 网络请求的配置
 * fetch(url,opts)
 * .then((response)=>{
    // 网络请求成功执行该回调函数,得到响应对象,数据存储在response里面
    return response.text();
    return response.json();
   })
   .then((resonseData)=>{
    // 处理请求得到的数据
   })
   .catch((error)=>{
    // 网络请求失败执行该回调函数,得到错误信息
   })
 */
function getReuquest(url){
  var opts = {
    method:"GET"
  }
//返回一个带有文本的对象
  fetch(url,opts)
  .then((response) => {
    return response.json(); 
  })
  .then((responseJson)=>{
    alert(responseJson.msg);
  })
  .catch((error)=>{
    alert(error);
  })
}

/*
 FormData
 var data = new FormData();
 data.append("name","潘亮")
 在jquery中,"key=value&key1=value1"作为参数传入对象框架会自动封装为FormData,
 */

function postReuquest(url){
  var Data = new FormData();
  Data.append("name","潘亮");
  Data.append("password","123456");
  var opts = {
    method:"POST",
    body:Data
  }
//返回一个带有文本的对象
  fetch(url,opts)
  .then((response) => {
    return response.json(); 
  })
  .then((responseJson)=>{
    alert(responseJson.msg);
  })
  .catch((error)=>{
    alert(error);
  })
}

var Fetch = React.createClass({
  render:function(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={getReuquest.bind(this,"http://hr.trc-demo.com:3002/react_get")}>
          <View style={styles.btn}>
            <Text style={styles.text}>Get</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={postReuquest.bind(this,"http://hr.trc-demo.com:3002/react_post")}>
          <View style={styles.btn}>
            <Text style={styles.text}>POST</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:30,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  btn:{
    width:60,
    height:30,
    borderWidth:1,
    borderColor:"#000",
    borderRadius:3,
    justifyContent:"center",
    alignItems: "center",
  },
  text:{
    color:"#000",
  }
});

// 导出模块
module.exports = Fetch;