import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {CircleFade} from 'react-native-animated-spinkit';

export const LoadingIndicator = () => {
  return (
    <View style={styles.MainContainer}>
      <View>
        <Text style={styles.text}>Loading events...</Text>
      </View>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    opacity: 0.2,
    zIndex: 200,
  },
  text: {
    fontSize: 24,
    color: '#BF360C',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: heightPercentageToDP('10%'),
  },
});
