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
  View
} from 'react-native';

/*
  常用特性:
  onPress 手指触摸事件
  numberOfLines 显示多少行
  可以设置字体颜色、大小、对齐方式等等
 */

/*
  界面布局分为两个部分:
  Header和新闻信息
  整个页面是一个组件,由两个子组件组成
  如果都写在index.ios.js文件中,代码比较乱
  在单独一个文件中定义子组件,使用Module.exports讲组件导出为独立的模块,
  可以在其他文件中引用
 */

// 引入
var Header = require('./header');
var News = require('./news');

var LessonText = React.createClass({
  render: function() {
    // 新闻信息数组
    var news = [
      '1.暗访"笑气"市场：40元可买到10支 供货商称',
      '2.沙特等多国与卡塔尔此前签订"绝密文件"遭曝',
      '3.河南所有公立医院 8月底前全部取消药品加成',
      '4.15岁熊孩子为泄愤划29辆车 因家长不许玩手',
      '5.老人输血染艾:医院和血站被判担责7成 感染'
    ];
    return (
      <View style={styles.flex}>
        {/* Header */}
        <Header></Header>
        {/* News */}
        <News news={news}></News>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

AppRegistry.registerComponent('LessonText', () => LessonText);