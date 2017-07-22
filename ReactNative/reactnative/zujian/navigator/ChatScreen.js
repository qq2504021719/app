
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
  // StatusBar,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with Lucy{params.user}</Text>
      </View>
    );
  }
}

module.exports = ChatScreen;