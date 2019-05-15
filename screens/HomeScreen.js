import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect1}>
        </View>
        <View style={styles.rect2}>
          <View style={styles.credits}>
            <View style={styles.textWrapper}>
              <Text style={styles.creditsText}>Credits</Text>
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.creditsText}>$85</Text>
            </View>
          </View>
          <View style={styles.addFunds}>
            <Button
                  style={styles.button4}
                  title="Add Funds"
                  onPress={() => this.props.navigation.navigate('Jobs')}
                />
          </View>
        </View>
        <View style={styles.rect3}>
          <Text style={styles.requestText}>Request a Cleaning</Text>
            <View style={styles.requestButtonBox}>
              <TouchableHighlight
               style={styles.button2}
               onPress={() => this.props.navigation.navigate('Jobs')}
              >
                <Text style={styles.button3Text}> Request Provider </Text>
              </TouchableHighlight>
            </View>
        </View>
        <View style={styles.rect4}>
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
  rect1: {
    flex: 0.05,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  rect2: {
    flex: 0.2,
    alignSelf: "stretch"
  },
  rect3: {
    flex: 0.65,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",

  },
  rect4: {
    flex: 0.1,
    backgroundColor: "rgb(230,230,230)",
    alignSelf: "stretch"
  },
  credits: {
    flex: 0.5,
    flexDirection: "row",
    alignSelf: "stretch",
    opacity: 1,
    borderRadius: 25,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: "rgba(134,219,234,1)",
  },
  textWrapper: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  creditsText: {
    fontSize: 18,
    fontFamily: "ArialRoundedMTBold"
  },
  addFunds: {
    flex: 0.5,
    alignSelf: "stretch",
  },
  button2: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: 'center',
    justifyContent: 'center',
  },
  requestText: {
    width: 250,
    height: 34,
    backgroundColor: "transparent",
    fontSize: 25,
    fontFamily: "ArialRoundedMTBold",
    textAlign: "center"
  },
  requestButtonBox: {
    width: 250,
    height: 250,
    backgroundColor: "rgba(134,219,234,1)",
    opacity: 1,
    borderRadius: 40
  },

});


/*
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  body: {
    alignSelf: "stretch",
    flex: 1,
  },
  creditsBox: {
    flex: .3,
    alignSelf: "stretch",
    position: "absolute",
    backgroundColor: "rgba(246,244,244,1)",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    opacity: 1
  },
  button4: {
    width: 99,
    height: 35
  },
  creditDisplayBox: {
    width: 282,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "rgba(134,219,234,1)",
    opacity: 1,
    borderRadius: 25
  },
  
  credits: {
    width: 115,
    height: 24,
    alignSelf: "center",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "ArialRoundedMTBold"
  },
  creditAmount: {
    width: 46.58,
    height: 18,
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "ArialRoundedMTBold"
  },
  
  requestBox: {
    flex: .6,
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "rgba(246,244,244,1)",
    flexDirection: "column",
    right: 0,
    opacity: 1
  },
  requestText: {
    width: 250,
    height: 34,
    backgroundColor: "transparent",
    fontSize: 25,
    fontFamily: "ArialRoundedMTBold",
    textAlign: "center"
  },
  requestButtonBox: {
    width: 250,
    height: 250,
    backgroundColor: "rgba(134,219,234,1)",
    opacity: 1,
    borderRadius: 40
  },
  spacerBox: {
    flex: .1,
    alignSelf: "stretch",
    backgroundColor: "rgba(134,219,234,1)",
    opacity: 1,
    borderRadius: 40
  },
  button2: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/