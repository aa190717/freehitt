import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const LoadingIndicator = () => {
  return (
    <View style={styles.loading_main_view}>
      <View>
        <Text style={styles.loading_text}>Loading events...</Text>
      </View>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};
const styles = StyleSheet.create({
  loading_main_view: {
    flex: 1,
    opacity: 0.2,
    zIndex: 200
  },
  loading_text: {
    fontSize: 24,
    color: '#BF360C',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: heightPercentageToDP('10%')
  }
});
