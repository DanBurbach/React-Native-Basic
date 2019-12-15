import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ListsScreen from '../screens/ListsScreen';
import FlexboxScreen from '../screens/FlexboxScreen';
import ColorGradientScreen from '../screens/ColorGradientScreen';
import APICallScreen from '../screens/APICallScreen';
import TodoScreen from '../screens/TodoScreen';

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
  tabBarIcon: ({ focused }) => ( 
    <TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-link' : 'md-link'
    }
    />
  ),
};
FlexboxStack.path = '';

// Animated gradient examples ===================================
const ColorGradientStack = createStackNavigator({
    ColorGradient: ColorGradientScreen,
  },
  config
);
ColorGradientStack.navigationOptions = {
  tabBarLabel: 'Color Gradient',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};
ColorGradientStack.path = '';

// todo list example =============================
const APICallStack = createStackNavigator({
    APICall: APICallScreen,
  },
  config
);
APICallStack.navigationOptions = {
  tabBarLabel: 'APICall',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};
APICallStack.path = '';


// todo list example ===============================
const TodoStack = createStackNavigator({
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
  ColorGradientStack,
  APICallStack,
  TodoStack,
});

tabNavigator.path = '';

export default tabNavigator;