import React, { Component } from "react";
import { View, StyleSheet, TouchableHighlight  } from "react-native";
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class PriceScreen extends Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect}>
          <Text style={styles.text}>Job: 2 Hr Laundry</Text>
          <View style={styles.rect4} />
        </View>
        <View style={styles.rect2}>
          <Text style={styles.text2}>Providers</Text>
          <View style={styles.rect5}>
            <ListAvatarExample/>
          </View>
        </View>  
      </View>
    );
  }
}

class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.rollingstone.com/wp-content/uploads/2018/12/shutterstock_10012822bl.jpg?crop=900:600&width=440' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.rollingstone.com/wp-content/uploads/2018/12/shutterstock_10012822bl.jpg?crop=900:600&width=440' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.rollingstone.com/wp-content/uploads/2018/12/shutterstock_10012822bl.jpg?crop=900:600&width=440' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.rollingstone.com/wp-content/uploads/2018/12/shutterstock_10012822bl.jpg?crop=900:600&width=440' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rect: {
    flex: 0.25,
    backgroundColor: "rgba(106,17,187,1)",
    opacity: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-around"
  },
  rect2: {
    backgroundColor: "rgba(126,211,33,1)",
    opacity: 1,
    flex: 0.75,
    alignSelf: "stretch",
    justifyContent: "space-between",
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 12
  },
  rect4: {
    backgroundColor: "rgb(230,230,230)",
    alignSelf: "stretch",
    flex: .75,
    borderRadius: 25,
    margin: 15
  },
  text: {
    flex: .25,
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

});