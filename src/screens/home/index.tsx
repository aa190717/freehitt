import React from 'react';
import {StyleSheet, View} from 'react-native';
import Events from '../../navigation/events';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Events />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    flexDirection: 'column',
  },
  childContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100,
  },
  header: {
    backgroundColor: 'cyan',
    width: '100%',
    height: '15%',
  },
});
