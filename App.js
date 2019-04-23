import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
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


class FirstScreen extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'teal' }}>
        <Text style={styles.text}>FirstScreen</Text>
        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    );
  }
}

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
    First: {screen: FirstScreen},
    Second: {screen: SecondScreen},
    Third: {screen: ThirdScreen}
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
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
  }
});
