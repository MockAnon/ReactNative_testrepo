import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { YellowBox } from 'react-native';

import EventList from './EventList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <EventList />
        <Text> JARONS POKEMON GO EXP - Gotta catch -em all</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
