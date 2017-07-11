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

var LessonFlex = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
          
        </View>
        <View style={styles.child2}>
          
        </View>
      </View>
    );
  }
});


// var styles = StyleSheet.create({
//   container: {
//     margin: 30,
//     width: 300,
//     height: 500,
//     backgroundColor: "#3399FF",
//     // 默认主轴方向是column
//     // 设置为横向排列 
//     flexDirection: "row",
//     // 设置主轴方向
//     justifyContent: "center",
//     // 交叉轴
//     alignItems: "center",
//   },
//   child1: {
//     width: 100,
//     height: 100,
//     backgroundColor: "#3399CC",
//   },
//   child2: {
//     width: 100,
//     height: 100,
//     backgroundColor: "#339999",
//   }
// });



// flex 
// 可以给组件指定flex,并且flex的值是数字。flex:1,表示组件可以撑满父组件所有的剩余空间
// 同时存在多个并列的子组件, flex:1,表示均分
// 如果这些并列的子组件的flex的值不一样,则谁的值更大,谁占据剩余空间的比例就更大(即占据剩余空间的比等于并列组件间flex值的比)

var styles = StyleSheet.create({
  container: {
    margin: 30,
    flex: 1,
    backgroundColor: "#3399FF",
  },
  child1: {
    flex: 1,
    backgroundColor: "#3399CC",
  },
  child2: {
    flex: 2,
    backgroundColor: "#339999",
  }
});


AppRegistry.registerComponent('LessonFlex', () => LessonFlex);