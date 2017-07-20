/*
 * 实现功能:封装Header,在头部展示标题和返回按钮
 *
 * 包含组件:
 *
 * 外部传入:
 * navigator 点击返回按钮返回上一级页面
 * initObj(backName,title) 返回按钮的名称、标题
 */

import React, { Component } from 'react';  
import {  
  AppRegistry,  
  StyleSheet,  
  Text,  
  View,   
  TouchableOpacity,
} from 'react-native';