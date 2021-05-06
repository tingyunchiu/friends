import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import MyFirends from './MyFirends';
import AddFriend from './AddFriend';
import Logout from './LogOut';

const Tab = createBottomTabNavigator();

function MyTabs({ navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
          labelStyle: {
            fontSize: 12,
            margin: 0,
            padding: 0,
          },
          tabStyle: {
            justifyContent: 'center'
          },
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Firends" component={MyFirends} />
      <Tab.Screen name="Add New Firend" component={AddFriend} />
      <Tab.Screen name="Logout" component={Logout}/>
    </Tab.Navigator>
  );
}
export default MyTabs;