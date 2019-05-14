import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableHighlight  } from "react-native";

export default class PriceScreen extends Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect}>
          <View style={styles.rect4} />
          <Text style={styles.text}>Job: 2 Hr Laundry</Text>
        </View>
        <View style={styles.rect2}>
          <Text style={styles.text2}>Providers</Text>
          <View style={styles.rect5} />
        </View>
        <View style={styles.rect3} >
          <TouchableHighlight
           style={styles.button3}
           onPress={() => this.props.navigation.navigate('Provider')}
          >
            <Text style={styles.button3Text}> Next </Text>
          </TouchableHighlight>
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
  rect: {
    flex: 0.35,
    backgroundColor: "rgba(106,17,187,1)",
    opacity: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-around"
  },
  rect2: {
    backgroundColor: "rgba(126,211,33,1)",
    opacity: 1,
    flex: 0.5,
    alignSelf: "stretch",
    justifyContent: "space-between",
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 15
  },
  rect3: {
    flex: 0.15,
    alignSelf: "stretch"
  },
  rect4: {
    backgroundColor: "rgb(230,230,230)",
    alignSelf: "stretch",
    flex: .8,
    borderRadius: 25,
    margin: 43
  },
  text: {
    flex: .2,
    fontSize: 20,
    fontFamily: "ArialRoundedMTBold",
    textAlign: "center",
    backgroundColor: "transparent",
    alignSelf: "stretch",
    margin: 0
  },
  rect5: {
    backgroundColor: "rgba(250,249,249,1)",
    alignSelf: "stretch",
    flex: 1,
    borderColor: "rgba(230,230,230,1)",
    borderWidth: 0,
    opacity: 1,
    marginTop: 10,
    borderRadius: 5
  },
  text2: {
    fontSize: 20,
    fontFamily: "ArialRoundedMTBold",
    textAlign: "center",
    backgroundColor: "transparent",

    alignSelf: "stretch"
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
});