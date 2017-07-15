/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

/*
 * 用于显示图片的组件,包括网络图片、静态资源等等
 * 常用性能:
 * resizeModel 图片适用模式 cover、contain、stretch
 * source 图片引用地址
 * IOS 支持属性:onLoad、onLoadEnd、onLoadStart、onProgress
 * http://pic.qiantucdn.com/58pic/17/06/86/47n58PICq5w_1024.jpg!/fw/
 780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center
 */
var Dhheader = require('../daohang/dhheader');
var Images = React.createClass({
  render: function() {
    return (
      <View style={styles.tflex}>
        <Dhheader navigators={this.props.navigator}></Dhheader>
        <View style={styles.container}>
          <View style={styles.net}>
            <Image style={styles.netImage} source={{uri:"http://pic.qiantucdn.com/58pic/17/06/86/47n58PICq5w_1024.jpg!/fw/780/watermark/url/L3dhdGVybWFyay12MS4zLnBuZw==/align/center"}} />
          </View>
          <View style={styles.local}>
            <Image style={styles.localImage} source={{uri:"http://desk.fd.zol-img.com.cn/t_s1024x768c5/g5/M00/02/03/ChMkJlbKx2qIKPxiAAlXILFmr4gAALHzQFig2UACVc4500.jpg"}} />
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  tflex: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  container: {
    flex: 1,
    margin: 25,
    alignItems: "center",
  },
  net: {
    marginTop: 30,
    width: 300,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan",
  },
  netImage: {
    width: 300,
    height: 300,
  },
  local: {
    marginTop: 30,
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCC",
  },
  localImage: {
    width: 180,
    height: 180,
    backgroundColor: "gray",
  }
});

// 导出模块
module.exports = Images;