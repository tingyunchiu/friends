import React, { useState }from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function LoginScreen({ navigation, onSubmit }) {
  const [email, setemail] = useState('');
  const onPress = () => {
    if (email !=='') {
      navigation.navigate('MyTabs')
    }
    else {
      Alert.alert(
      "Opps!",
      "Incorrect email!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{margin: 10}}>Please log in</Text>
      <TextInput
        style={{
          margin: 10,
          height: 40,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          borderColor: 'gray',
          borderWidth: 1,
          textAlign: 'center'}}
          placeholder= {'demo'}
          onChangeText={email => setemail(email)}
          defaultValue={email}
        />
      <Button
        style={{margin: 10}}
        title="LOGIN"
        onPress={onPress}>
      </Button>
    </View>
  );
}

export default LoginScreen;
