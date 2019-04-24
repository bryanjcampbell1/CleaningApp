import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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



class SecondScreen extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'pink' }}>
        <Text>Second Screen</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Third')}
        />
      </View>
    );
  }
}

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
    First: {screen: HomeScreen},
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
  }
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
    flex: 1,
    flexDirection: "column"
  },
  rect: {
    height: 83.17,
    width: 375,
    backgroundColor: "rgba(134,219,234,1)",
    opacity: 1
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