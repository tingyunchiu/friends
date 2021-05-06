import React, { useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button, Alert} from 'react-native';

const AddFriend = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const addAlert = () =>
    Alert.alert(
      "Congratulations!",
      "Friend added to contact!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{margin: 10}}>Met some new friends?</Text>
      <TextInput
        style={{height: 40,
        width: 200,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center'}}
        placeholder= {'Please Enter Your Friend\'s Name'}
        onChangeText={name => setName(name)}
        defaultValue={name}
        />
        <TextInput
        style={{height: 40,
        width: 200,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        borderColor: 'gray',
        borderWidth: 1
        }}
        placeholder= {'Please Enter Your Friend\'s City'}
        onChangeText={city => setCity(city)}
        defaultValue={city}
        />
      <Text>My new friend is {name}</Text>
      <Text style={{margin: 10}}>They live in: {city}</Text>
      <Button
        title="Yes, add them!"
        onPress = {addAlert}>
      </Button>
    </View>
  );
}

export default AddFriend;