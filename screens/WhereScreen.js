
    
import React, { Component } from 'react';
import { StyleSheet, View, Button, Alert, AppRegistry, Text, Image, TouchableHighlight } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class WhereScreen extends Component {
  static navigationOptions = {
  header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
    mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    locationResult: null,
    location: {coords: { latitude: 37.78825, longitude: -122.4324}},
    nameOfLocation: null,
  };
  }

  

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
       location,
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
 };

handleClick = () => {
      // your logic
      this.setState({
      
    });
  };



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.PlacesContainer}>
              <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2} // minimum length of text to search
                autoFocus={false}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                listViewDisplayed='auto'    // true/false/undefined
                fetchDetails={true}
                renderDescription={row => row.description} // custom description render
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                  
                  //console.log(data.description);
                  //console.log(details.geometry);
                 // console.log(details.geometry.location.lat);
                  //console.log(details.geometry.location.lng);

                  var coordinateString = '{"coords": { "latitude": ' + details.geometry.location.lat +', "longitude": '+details.geometry.location.lng +'}}';

                  console.log(coordinateString);

                  var obj = JSON.parse(coordinateString);

                  this.setState({
                      location: obj,
                      nameOfLocation: data.description
                  });

                }}
                
                getDefaultValue={() => ''}
                
                query={{
                  // available options: https://developers.google.com/places/web-service/autocomplete
                  key: 'AIzaSyDIzfRxsAhZXuErTCxIvRISlQ8zUXngn4I',
                  language: 'en', // language of the results
                  //types: '(cities)' // default: 'geocode'
                }}
                
                styles={{
                  textInputContainer: {
                    width: '100%'
                  },
                  description: {
                    fontWeight: 'bold'
                  },
                  predefinedPlacesDescription: {
                    color: '#1faadb'
                  }
                }}
                
                //currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
               
                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                
              />
        </View>
        <View style={styles.MapContainer}>
          <MapView
          style={{ alignSelf: 'stretch', height: 600}}
          region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
          onRegionChange={this._handleMapRegionChange}
          >
            <MapView.Marker
              coordinate={this.state.location.coords}
              title="My Marker"
              description="Some description"
            />
          </MapView>
        </View>
        <View style={styles.ChosenLocationBox}>
          <Text style={styles.ChosenLocationText}>{this.state.nameOfLocation}</Text>
        </View>
        <View style={styles.nextButtonBox} >
          <TouchableHighlight
           style={styles.button3}
           onPress={() => this.props.navigation.navigate('Where')}
          >
            <Text style={styles.button3Text}> Next </Text>
          </TouchableHighlight>
        </View>
        
      </View>
    );
  }
}


const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      
      getDefaultValue={() => ''}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyDIzfRxsAhZXuErTCxIvRISlQ8zUXngn4I',
        language: 'en', // language of the results
        //types: '(cities)' // default: 'geocode'
      }}
      
      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
      
      //currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
     
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PlacesContainer: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  MapContainer: {
    flex: .6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonBox: {
    flex: 0.15,
  },
  ChosenLocationBox: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "ArialRoundedMTBold",
  },
  ChosenLocationText:{
    fontFamily: "ArialRoundedMTBold",
    fontSize: 25,
  },
  button3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 20,
    borderColor: "rgba(134,219,234,1)",
    borderWidth: 5,
    margin: 30
  },
  button3Text: {
    backgroundColor: "transparent",
    fontSize: 25,
    fontFamily: "ArialRoundedMTBold",
    textAlign: "center"
  },
})
