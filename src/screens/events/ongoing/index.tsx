import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const OnGoing = () => {
  return (
    <View style={styles.ongoing_main_view}>
      <Text>Coming soon...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  ongoing_main_view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  }
});
