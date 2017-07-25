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

var FlatListExample = React.createClass({
  _renderItem:function({item}){
    return (
      <View style={styles.item}><View style={styles.imageContainer}><Image style={styles.image} source={{uri:item.uri}} /></View><Text style={styles.text}>{item.key}</Text></View>
    );
  },
  render:function(){
    return (
      <View style={{flex:1,margin:20,}}>
        <FlatList
          data={data}
          renderItem={this._renderItem}
          getItemLayout={(data, index) => ( {length:120, offset: 40 * index, index} )}
          onEndReached = {this._onEndReached}
          onEndReachedThreshold = {0.1}
        />
      </View>
    );
  },
  _onEndReached:function(){
    alert(123);
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