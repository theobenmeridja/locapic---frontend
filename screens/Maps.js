import React from 'react';
import { MapView, Location, Permissions } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

//bonjour c'est yoan j'espere quez vous allez bien

export default class App extends React.Component {

  constructor(){
    super()
//position par defaut de la map
    this.state=({
      marker:[],
      location:{
        latitude: 48.78825,
        longitude: 2.4324,
        latitudeDelta:0.5,
        longitudeDelta:0.5
      }
    })
  }
//avant le chargement de l'appli lance la fonction _getLocationAsync

componentWillMount=()=> {
  fetch("http://10.2.1.38:3000/coordsMaps")
  .then(res => {
    return res.json()
  })
  .then(result => {
    var locationCopy = [...this.state.marker]

    for (var i = 0; i < result.length; i++) {
      locationCopy.push({
        latitude:result[i].latitude,
        longitude:result[i].longitude
      })
    }

    this.setState({
      marker:locationCopy
    })
  });
}


  render() {

    var allMarker = this.state.marker.map(function(coord, i){
      return(
        <MapView.Marker
          coordinate={coord}
        />
      )
    })

    return (

      <MapView
      style={{ flex: 1 }}
        initialRegion={this.state.location}
        region={this.state.location}>

        {allMarker}

        </MapView>
    );
  }
}
