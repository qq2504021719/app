
import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  StatusBar,
} from 'react-native';

// 隐藏状态栏M
StatusBar.setHidden(true);

class BScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>嗨,B!</Text>
        <Button
          onPress={() => navigate('A')}
          title="跳转到A"
        />
      </View>
    );
  }
}

module.exports = BScreen;