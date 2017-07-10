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
  在web开发中,div是最重要的一个元素,是页面布局的基础
  在ReactNative开发中,View组件的作用类似于div,是最基本的组件。
  被看做是容器组件

 */

var LessonView = React.createClass({
  reder: function() {
    return (
      <View style={[styles.container,styles.flex]}>
        <View style={styles.item}>
          <View style={[styles.flex,styles.center]}>
            <Text>酒店</Text>
          </View>
          <View style={[styles.flex,styles.lineLeftRight]}>
            <View style={[styles.flex,styles.center,styles.lineCenter]}>
              <Text>海外酒店</Text>
            </View>
            <View>
              <Text>特价酒店</Text>
            </View>
          </View>
          <View>
            <View>
              <Text>团购</Text>
            </View>
            <View>
              <Text>民宿.客栈</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#F2F2F2",
  },
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#FF607C",
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 80,
    borderRadius: 5,
  },
  // 给中间的区域设置左右边线
  lineLeftRight: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#FFFFFF",
  },
  // 给上边区域设置下边线
  lineCenter: {
    borderBottomWidth: 1,
    borderColor: "white",
  },
});

AppRegistry.registerComponent('LessonView', () => LessonView);