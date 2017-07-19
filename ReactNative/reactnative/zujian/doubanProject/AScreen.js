
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

class AScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>嗨,A!</Text>
        <Button
          onPress={() => navigate('B')}
          title="跳转到B"
        />
      </View>
    );
  }
}

module.exports = AScreen;