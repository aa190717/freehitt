import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Result = () => {
  return (
    <View style={styles.result_main_view}>
      <Text>Coming soon...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  result_main_view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  }
});
