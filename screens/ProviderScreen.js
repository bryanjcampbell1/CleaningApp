import React, { Component } from "react";

import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

export default class ProviderScreen extends Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect}>
          <View style={styles.rect4} />
          <View style={styles.rect5} />
        </View>
        <View style={styles.rect2} />
        <View style={styles.rect3}>
          <TouchableHighlight
            style={styles.button3}
            onPress={() => this.props.navigation.navigate("Where")}
          >
            <Text style={styles.button3Text}> Request Provider </Text>
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
    flex: 0.5,
    backgroundColor: "rgb(230,230,230)",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    paddingTop: 0
  },
  rect2: {
    flex: 0.35,
    backgroundColor: "rgba(226,17,17,1)",
    opacity: 1,
    alignSelf: "stretch"
  },
  rect3: {
    flex: 0.15,
    backgroundColor: "rgb(230,230,230)",
    alignSelf: "stretch"
  },
  button3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  rect4: {
    width: 224,
    height: 213,
    backgroundColor: "rgba(215,0,247,1)",
    opacity: 1,
    margin: 5,
    borderRadius: 100
  },
  rect5: {
    width: 305,
    height: 54,
    backgroundColor: "rgba(234,124,124,1)",
    opacity: 1,
    margin: 5
  }
});