import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import {Calendar} from 'react-native-calendars';



export default class WhereWhenScreen extends Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.calendarBox}>
          <CalendarsScreen />
        </View>
        <View style={styles.timePickerBox} />
        <View style={styles.nextButtonBox} />
      </View>
    );
  }
}

class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
        />
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}



const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column"
  },
  calendarBox: {
    flex: 0.5,
    backgroundColor: "rgb(226, 226, 226)",
    alignSelf: "stretch"
  },
  timePickerBox: {
    flex: 0.35,
    backgroundColor: "rgb(250, 250, 250)"
  },
  nextButtonBox: {
    flex: 0.15,
    backgroundColor: "rgb(207, 207, 207)"
  },
  calendarObject: {
    backgroundColor: "rgba(165,2,2,1)",
    opacity: 1,
    alignSelf: "stretch",
    flex: 1,
    borderColor: "#000000",
    borderWidth: 0,
    margin: 25,
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});