import React, {useLayoutEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Events from '../../navigation/events';

export const HomeScreen = ({navigation}: any) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableWithoutFeedback>
          <View>
            <Text style={{marginRight: 40, fontWeight: 'bold'}}>2300</Text>
            <Image
              source={require('../../assets/images/coin.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                position: 'absolute',
                left: 45,
                zIndex: 10,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      ),
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
