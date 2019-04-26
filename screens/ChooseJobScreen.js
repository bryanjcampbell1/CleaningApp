import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';


export default class SecondScreen extends Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.body}>
          <View style={styles.jobs}>
            <View style={styles.homeBox} >
              <TouchableHighlight
               style={styles.button2}
               onPress={() => this.props.navigation.navigate('Details')}
              >
               <Text style={styles.button2Text}> House / Apartment </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.carBox} >
              <TouchableHighlight
               style={styles.button2}
               onPress={() => this.props.navigation.navigate('Details')}
              >
               <Text style={styles.button2Text}> Car </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.laundryBox} >
              <TouchableHighlight
               style={styles.button2}
               onPress={() => this.props.navigation.navigate('Details')}
              >
               <Text style={styles.button2Text}> Laundry </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.dishesBox} >
              <TouchableHighlight
               style={styles.button2}
               onPress={() => this.props.navigation.navigate('Details')}
              >
               <Text style={styles.button2Text}> Dishes </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.customBox} >
              <TouchableHighlight
               style={styles.button2}
               onPress={() => this.props.navigation.navigate('Details')}
              >
               <Text style={styles.button2Text}> Custom </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignSelf: "stretch",
    backgroundColor: "rgba(246,244,244,1)",
    opacity: 1,
    borderColor: "#000000",
    borderWidth: 0,
    padding: 20
  },
  jobs: {
    flexDirection: "column",
    backgroundColor: "rgb(230,230,230)",
    alignSelf: "stretch",
    flex: 1
  },
  carBox: {
    flex: 0.2,
    backgroundColor: "rgb(218, 218, 218)"
  },
  laundryBox: {
    flex: 0.2,
    backgroundColor: "rgb(230, 230, 230)"
  },
  dishesBox: {
    flex: 0.2,
    backgroundColor: "rgb(215, 215, 215)"
  },
  customBox: {
    flex: 0.2,
    backgroundColor: "rgb(211, 211, 211)"
  },
  homeBox: {
    flex: 0.2,
    backgroundColor: "rgb(211, 211, 211)"
  },
  JobsButton: {
    flex: 1,
    fontSize: 40,
    fontFamily: "ArialRoundedMTBold",
    textAlign: "center"
  },
  button2: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2Text: {
    backgroundColor: "transparent",
    fontSize: 25,
    fontFamily: "ArialRoundedMTBold",
    textAlign: "center"
  },
  
});