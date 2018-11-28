import React from 'react';
import { View } from 'react-native';
import {Avatar, Text} from 'react-native-elements';

export default class AccountScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>

      <Avatar
        large
        rounded
        title="JD"
        overlayContainerStyle={{backgroundColor: '#e67e22'}}
      />
      <Text h4>John Doe</Text>
      <Text h4>john@gmail.com Doe</Text>


    </View>
    );
  }
}
