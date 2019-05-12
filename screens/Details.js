import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Item, Input } from 'native-base';

export default class DetailsScreen extends Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.body}>
          <View style={styles.detailsBox}>
            <View style={styles.customerBox}>
              <Text style={styles.customerLabel}>Customer Responsibility</Text>
              <Text style={styles.customerText}>Customer Text</Text>
            </View>
            <View style={styles.providerBox}>
              <Text style={styles.providerLabel}>Provider Responsibility</Text>
              <Text style={styles.providerText}>Text Added</Text>
            </View>
            <View style={styles.EstimatedHoursBox}>
              <Text style={styles.EstimatedHoursText}>Estimated Hours</Text>
              <Item rounded style={styles.InputHours}>
                <Input placeholder='1'/>
              </Item>
              <TouchableHighlight
               style={styles.button3}
               onPress={() => this.props.navigation.navigate('When')}
              >
               <Text style={styles.button3Text}> Next </Text>
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
    backgroundColor: "rgb(230,230,230)"
  },
  detailsBox: {
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderColor: "#000000",
    borderWidth: 0,
    flex: 1,
    alignSelf: "stretch",
    margin: 23,
    flexDirection: "column"
  },
  customerBox: {
    flex: 0.35,
    backgroundColor: "rgb(209, 209, 209)",
    alignItems: "center",
    margin: 0,
    justifyContent: "flex-start",
    padding: 0
  },
  providerBox: {
    flex: 0.35,
    backgroundColor: "rgb(251, 251, 251)",
    alignItems: "center"
  },
  customerLabel: {
    alignSelf: "center",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "ArialRoundedMTBold",
    margin: 15
  },
  providerLabel: {
    alignSelf: "center",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "ArialRoundedMTBold",
    margin: 15
  },
  customerText: {
    flex: 0.8,
    backgroundColor: "transparent"
  },
  providerText: {
    width: 74,
    height: 13,
    backgroundColor: "transparent",
    margin: 15
  },
  EstimatedHoursBox: {
    flex: 0.3,
    backgroundColor: "transparent"
  },
  EstimatedHoursText: {
    alignSelf: "center",
    backgroundColor: "transparent",
    fontSize: 18,
    fontFamily: "ArialRoundedMTBold",
    margin: 15
  },
  InputHours: {
    marginLeft: 30,
    marginRight:30
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