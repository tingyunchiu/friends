import React, { useState }from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Logout({ navigation }) {
  const onPress= () => {
    navigation.navigate('LoginScreen')
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{margin: 10}}>Are you sure you want to leave?</Text>
      <Button
        title="Yes"
        onPress={onPress}>
      </Button>
    </View>
  );
}


export default Logout;
