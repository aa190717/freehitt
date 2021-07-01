import React, { useLayoutEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Events from '../../navigation/events';

export const HomeScreen = ({ navigation }: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback>
          <View>
            <Text style={styles.header_text}>2300</Text>
            <Image
              source={require('../../assets/images/coin.png')}
              style={styles.header_img}
            />
          </View>
        </TouchableWithoutFeedback>
      )
    });
  }, []);
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
    flexDirection: 'column'
  },
  header_text: { marginRight: 40, fontWeight: 'bold' },
  header_img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    left: 45,
    zIndex: 10
  }
});
