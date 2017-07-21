# React 学习

## reactx reacr学习
### 环境搭建、模板(index.html)、例子(react1.html) 
### 组件 创建组件类、样式(zhujian.html) 
### props 是组件自身的属性对象,一般用于嵌套的内外层组件中,负责传递信息(通常由父层组件向子层组件传递)
### ...this.props 将父组件的所有属性都复制过来
### this.props.children children是一个例外,不是跟组件的属性对应的。表示组件的所有子节点
### state  当state发生变化时,会调用组件内部的render方法
### lifecycle 组件的生命周期
## react-native学习

### reactnative-zujian-flex Flexbox布局
### reactnative-zujian-view View组件使用
### reactnative-zujian-text text使用,页面拆分成组件,点击事件,绑定事件传参,绑定参数,组件循环生成
### reactnative-zujian-touchable 三种按钮效果,绑定事件
### reactnative-zujian-input input框使用
### reactnative-zujian-image image使用
### reactnative-zujian-scrollview scrollview使用,电影列表
### reactnative-zujian-listview listview使用,电影列表
### reactnative-zujian-navigator navigator组件使用,(navigator页面切换)。(navigators)页面切换带参 StackNavigator 导航组件使用
老版本使用 安装 npm i -S react-native-deprecated-custom-components 官方文档 http://reactnative.cn/docs/0.46/navigation.html#content
### reactnative-zujian-daohang 页面导航 react-native的全部页面 
### reactnative-zujian-fetch fetch.js get请求 post请求  fetchmovielist.js 将电影列表数据更改为网络请求,默认显示数据加载中,数据请求完成后显示电影列表页面
## reactnative-zujian-doubanProject 项目一(请求豆瓣开放api,显示图片列表,电影列表,对应详情页(电影详情页请求网页数据))  

### reactnative-zujian-doubanProject-index 项目一导航搭建测试 reactnative-zujian-doubanProject
### reactnative-zujian-doubanProject-common-customWebView WebView组件使用,根据url展示网页信息(组件封装在common,调用在movie里面)
