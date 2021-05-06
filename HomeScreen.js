import * as React from 'react';
import { View, Text, Image } from 'react-native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{uri:
        'https://robohash.org/demo?set=set4'}}
        style={{
          width: 100,
          height: 100,
          margin:10
        }}
      />
      <Text> My name is Demo!</Text>
    </View>
  );
}

export default HomeScreen;