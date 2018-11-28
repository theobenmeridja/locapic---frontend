import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';
import { List, ListItem } from 'react-native-elements'

export default class PictureScreen extends React.Component {

  state={
    tabPicture:[]
  }


  componentWillMount() {

    fetch("http://10.2.1.38:3000/displayPicture")
    .then(res => {
      return res.json()
    })
    .then(result => {

      var tabPictureCopy = [...this.state.tabPicture]

      for (var i = 0; i < result.length; i++) {
        tabPictureCopy.push(result[i].url)
      }

      this.setState({
        tabPicture:tabPictureCopy
      })
    });
  }


  render() {
    var list = this.state.tabPicture.map( (picture, i) => {
      console.log(picture);
      return(
        <ListItem
          avatar={{uri:picture}}
          key={i}
        />
      )
    })

    return (
        <ScrollView contentComponentStyle={{ flex: 1 }}>
          <List containerStyle={{marginBottom: 20}}>
            {list}
          </List>
        </ScrollView>
    );
  }
}
