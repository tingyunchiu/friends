import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

function Friend(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{uri:
        'https://robohash.org/' + props.name + '.png'}}
        style={{width: 70, height: 70, margin: 10}}
      />
      <Text style={styles.baseText}>{props.name}</Text>
      <Text style={styles.secondText}>{props.city}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  secondText: {
    fontSize: 18,
  },
});

export default Friend;