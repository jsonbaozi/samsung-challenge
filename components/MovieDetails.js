import React from 'react';
import { StyleSheet, View, Image, Text, StatusBar } from 'react-native';

const MovieDetails = ({ navigation }) => (
  <View style={styles.movieDetails}>
    <Text> {navigation.getParam('movieDetails', 'Movie Title').title} </Text>
  </View>
);

const styles = StyleSheet.create({
  movieDetails: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default MovieDetails;
