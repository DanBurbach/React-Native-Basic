import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListsScreen from '../screens/ListsScreen';
import TodoScreen from '../screens/TodoScreen';
import FlexboxScreen from '../screens/FlexboxScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// home page navigation =============================
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};
HomeStack.path = '';

// listing examples ================================
const ListsStack = createStackNavigator(
  {
    Lists: ListsScreen,
  },
  config
);
ListsStack.navigationOptions = {
  tabBarLabel: 'Lists',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};
ListsStack.path = '';

// Flexbox examples ===================================
const FlexboxStack = createStackNavigator({
    Flexbox: FlexboxScreen,
  },
  config
);
FlexboxStack.navigationOptions = {
  tabBarLabel: 'Flexbox',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-link' : 'md-link'
    }
    />
  ),
};
FlexboxStack.path = '';


// todo list example ===============================
const TodoStack = createStackNavigator(
  {
    Todo: TodoScreen,
  },
  config
);
TodoStack.navigationOptions = {
  tabBarLabel: 'Todo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};
TodoStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ListsStack,
  FlexboxStack,
  TodoStack,
});

tabNavigator.path = '';

export default tabNavigator;