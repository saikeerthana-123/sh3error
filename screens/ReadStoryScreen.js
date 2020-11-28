import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import * as firebase from 'firebase'
import db from '../config.js'

export default class StoryScreen extends React.Component {
    state = {
    search: '',
  };
  updateSearch = (search) => {
    this.setState({ search });
  };
    render() {
      const { search } = this.state;
      const booksRef = db.collection('books');
      booksRef.doc('books').set(
        Title = 'Puss in the boots',
        Author = 'Charles Perault',
      );
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Read A Story</Text>
          <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
        </View>
      );
    }
}