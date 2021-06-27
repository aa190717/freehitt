import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export const ConfirmSelection = () => {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <ScrollView nestedScrollEnabled={true}>
          <Image
            source={require('../../../../assets/images/event.png')}
            style={{
              height: heightPercentageToDP('20%'),
              width: widthPercentageToDP('100%'),
            }}
          />
          <View
            style={{
              height: 50,
              width: widthPercentageToDP('100%'),
              backgroundColor: '#D1CBCB',
            }}>
            <Text style={{marginLeft: 20, marginTop: 15, fontWeight: 'bold'}}>
              Banglore vs Mumbai
            </Text>
          </View>

          <View style={{...styles.leftView, backgroundColor: '#d5d8f0'}}>
            <Text
              style={{
                marginLeft: 40,
                fontWeight: 'bold',
                color: '#FFF',
                marginTop: 15,
                fontSize: 18,
              }}>
              Virat Kohli
            </Text>
          </View>
          <View style={{...styles.rightView, backgroundColor: '#e3f0d5'}}>
            <Text
              style={{
                marginLeft: 40,
                fontWeight: 'bold',
                color: '#FFF',
                marginTop: 15,
                fontSize: 18,
              }}>
              Shikhar Dhawan
            </Text>
          </View>
          <View style={{...styles.leftView, backgroundColor: '#f0e4d5'}}>
            <Text
              style={{
                marginLeft: 40,
                fontWeight: 'bold',
                color: '#FFF',
                marginTop: 15,
                fontSize: 18,
              }}>
              Shreyas Iyer
            </Text>
          </View>
          <View style={{...styles.rightView, backgroundColor: '#f0d5d5'}}>
            <Text
              style={{
                marginLeft: 40,
                fontWeight: 'bold',
                color: '#FFF',
                marginTop: 15,
                fontSize: 18,
              }}>
              Ajinkya Rahane
            </Text>
          </View>
          <View style={{...styles.leftView, backgroundColor: '#d5e3f0'}}>
            <Text
              style={{
                marginLeft: 40,
                fontWeight: 'bold',
                color: '#FFF',
                marginTop: 15,
                fontSize: 18,
              }}>
              R Ashwin
            </Text>
          </View>
          <View style={{...styles.rightView, backgroundColor: '#f0efd5'}}>
            <Text
              style={{
                marginLeft: 40,
                fontWeight: 'bold',
                color: '#FFF',
                marginTop: 15,
                fontSize: 18,
              }}>
              KL Rahul
            </Text>
          </View>

          <AppButton
            title="Select wildcard"
            onPress={() => navigation.navigate('Wildcard')}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  pickerIcon: {
    position: 'absolute',
    bottom: 15,
    right: 10,
    fontSize: 20,
    marginTop: 200,
  },
  leftView: {
    width: widthPercentageToDP('60%'),
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    height: 50,
    backgroundColor: 'blue',
  },
  rightView: {
    width: widthPercentageToDP('60%'),
    marginRight: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    position: 'relative',
    height: 50,
    backgroundColor: 'yellow',
  },
  imageView: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#777777',
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 10,
  },
  placeholderStyle: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 50,
    marginLeft: 20,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'gray',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: widthPercentageToDP('80%'),
    marginLeft: 50,
    marginTop: 30,
    marginBottom: 30,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
