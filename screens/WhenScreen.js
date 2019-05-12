import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import {Calendar} from 'react-native-calendars';

import SimplePicker from 'react-native-simple-picker';

const options = ['12:00   AM', '12:30   AM', '1:00   AM','1:30   AM', '2:00   AM', '2:30   AM','3:00   AM', '3:30   AM', '4:00   AM','4:30   AM', '5:00   AM', '5:30   AM','6:00   AM', '6:30   AM', '7:00   AM','7:30   AM', '8:00   AM', '8:30   AM','9:00   AM', '9:30   AM', '10:00   AM','10:30   AM', '11:00   AM', '11:30   AM','12:00   PM', '12:30   PM', '1:00   PM','1:30   PM', '2:00   PM', '2:30   PM','3:00   PM', '3:30   PM', '4:00   PM','4:30   PM', '5:00   PM', '5:30   PM','6:00   PM', '6:30   PM', '7:00   PM','7:30   PM', '8:00   PM', '8:30   PM','9:00   PM', '9:30   PM', '10:00   PM','10:30   PM', '11:00   PM', '11:30   PM'];

class ExampleApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Current Option: {this.state.selectedOption}</Text>

        <Text
          style={{ color: '#006381', marginTop: 20, textAlign: 'center' }}
          onPress={() => {
            this.refs.picker.show();
          }}
        >
            Click here to select your option
        </Text>

        <SimplePicker
          ref={'picker'}
          options={options}
          onSubmit={(option) => {
            this.setState({
              selectedOption: option,
            });
          }}
        />

      </View>
    );
  }
}


export default class WhenScreen extends Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.calendarBox}>
          <CalendarsScreen />
        </View>
        <View style={styles.timePickerBox} >
          <ExampleApp />
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
    alignSelf: "stretch"
  },
  timePickerBox: {
    flex: 0.35,
    textAlign: 'center',
  },
  nextButtonBox: {
    flex: 0.15,
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
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  paragraph: {
    textAlign: 'center',
    color: '#002f2f',
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 18,
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