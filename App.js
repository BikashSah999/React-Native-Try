/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContent}>
        <View>
          <Text style={styles.helloText}>Hello</Text>
          <Text style={styles.userName}>Bikash Sah</Text>
        </View>
        <View style={styles.userphotoContainer}>
          <Image
            source={require('./assets/photo.png')}
            style={styles.userphoto}
          />
        </View>
      </View>
      <TextInput
        placeholder="Search Doctor or Symptoms"
        keyboardType="default"
        style={styles.search}
      />
      <View style={styles.middleContent}>
        <Text>Near By Doctors </Text>
        <Text>See All</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'grey',
  },
  topContent: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  helloText: {
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userphotoContainer: {
    backgroundColor: 'blue',
    padding: 5,
  },
  userphoto: {
    height: 50,
    width: 50,
  },
  search: {
    alignSelf: 'center',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
  },
  middleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
