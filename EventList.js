import React, { Component } from 'react';
import { FlatList } from 'react-native';

class EventList extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    const events = require('./db.json').events;
    this.setState({ events });
  }

  render() {
    return <FlatList data={[{ key: 'a' }, { key: 'b' }]} renderItem={({ item }) => <Text>{item.title}</Text>} keyExtractor={item => item.name} />;
  }
}

export default EventList;
