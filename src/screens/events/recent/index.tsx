import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Recent = () => {
  return (
    <View style={styles.recent_main_view}>
      <Text>Coming soon...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  recent_main_view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  }
});
