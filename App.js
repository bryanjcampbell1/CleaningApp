import React, { Component } from 'react';
import { View, Text, StyleSheet, Button , TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;





class SecondScreen extends Component {
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
               onPress={() => this.props.navigation.navigate('Third')}
              >
               <Text style={styles.button2Text}> House / Apartment </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.carBox} >
              <TouchableHighlight
               style={styles.button2}
               onPress={() => this.props.navigation.navigate('Third')}
              >
               <Text style={styles.button2Text}> Car </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.laundryBox} >
              <TouchableHighlight
               style={styles.button2}
               onPress={() => this.props.navigation.navigate('Third')}
              >
               <Text style={styles.button2Text}> Laundry </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.dishesBox} >
              <TouchableHighlight
               style={styles.button2}
               onPress={() => this.props.navigation.navigate('Third')}
              >
               <Text style={styles.button2Text}> Dishes </Text>
              </TouchableHighlight>
            </View>
            <View style={styles.customBox} >
              <TouchableHighlight
               style={styles.button2}
               onPress={() => this.props.navigation.navigate('Third')}
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
/*
<TouchableHighlight 
                  title="House / Apartment"
                  style={styles.button2}
                  onPress={() => this.props.navigation.navigate('Second')}
                </TouchableHighlight> 

*/

class ThirdScreen extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:'coral'  }}>
        <Text>Third Screen</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('First')}
        />
      </View>
    );
  }
}

class FourthScreen extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'orange' }}>
        <Text style={styles.text}>4th Screen</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Fifth')}
        />
      </View>
    );
  }
}

class FifthScreen extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'purple' }}>
        <Text>5th Screen</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Sixth')}
        />
      </View>
    );
  }
}

class SixthScreen extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor:'lightblue'  }}>
        <Text>6th Screen</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Fourth')}
        />
      </View>
    );
  }
}




class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
      </View>
    );
  }
}



const StackNavigator1 = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Second: {screen: SecondScreen},
    Third: {screen: ThirdScreen}
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerStyle: {
        backgroundColor: "rgba(134,219,234,1)",
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
        },

      };
    }
  }
);

const StackNavigator2 = createStackNavigator(
  {
    Fourth: {screen: FourthScreen},
    Fifth: {screen: FifthScreen},
    Sixth: {screen: SixthScreen}
  },
{   
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);


const DashboardStackNavigator1 = createStackNavigator(
  {
    DashboardStackNavigator1: StackNavigator1
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);


const DashboardStackNavigator2 = createStackNavigator(
  {
    DashboardStackNavigator2: StackNavigator2
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  StackNavigator1: {
      screen: DashboardStackNavigator1
  },
  StackNavigator2: {
    screen: DashboardStackNavigator2
  },

});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
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
    backgroundColor: "rgb(211, 211, 211)",
  },
  button2Text: {
    backgroundColor: "transparent",
    fontSize: 25,
    fontFamily: "ArialRoundedMTBold",
    textAlign: "center"
  },
  
});