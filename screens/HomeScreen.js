import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.body}>
          <View style={styles.creditsBox}>
            <View style={styles.creditDisplayBox}>
              <Text style={styles.credits}>Credits</Text>
              <Text style={styles.creditAmount}>$85</Text>
            </View>
            <Button
              style={styles.button4}
              title="Add Funds"
              onPress={() => this.props.navigation.navigate('Jobs')}
            />
          </View>
          <View style={styles.requestBox}>
            <Text style={styles.requestText}>Request a Cleaning</Text>
            <View style={styles.requestButtonBox}>
              <Button
                style={styles.button4}
                title="Add Funds"
                onPress={() => this.props.navigation.navigate('Jobs')}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column"
  },
  body: {
    backgroundColor: "rgba(246,244,244,1)",
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    opacity: 1
  },
  creditsBox: {
    top: 74,
    left: 0,
    height: 99.12,
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
    top: 220,
    left: 0,

    height: 253,
    position: "absolute",
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
    width: 200,
    height: 200,
    backgroundColor: "rgba(134,219,234,1)",
    opacity: 1,
    borderRadius: 40
  }
});