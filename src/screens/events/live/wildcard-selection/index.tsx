import React from 'react';
import {useNavigation} from '@react-navigation/native';
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

export const Wildcard = () => {
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

          <View
            style={{
              ...styles.leftView,
              backgroundColor: '#d5d8f0',
              flexDirection: 'row',
            }}>
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
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                marginLeft: 120,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/flash.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/plane.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
          </View>
          <View
            style={{
              ...styles.leftView,
              backgroundColor: '#e3f0d5',
              flexDirection: 'row',
            }}>
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
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                marginLeft: 70,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/flash.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/plane.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
          </View>
          <View
            style={{
              ...styles.leftView,
              backgroundColor: '#f0e4d5',
              flexDirection: 'row',
            }}>
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
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                marginLeft: 100,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/flash.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/plane.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
          </View>
          <View
            style={{
              ...styles.leftView,
              backgroundColor: '#f0d5d5',
              flexDirection: 'row',
            }}>
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
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                marginLeft: 75,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/flash.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/plane.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
          </View>
          <View
            style={{
              ...styles.leftView,
              backgroundColor: '#d5e3f0',
              flexDirection: 'row',
            }}>
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
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                marginLeft: 125,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/flash.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/plane.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
          </View>
          <View
            style={{
              ...styles.leftView,
              backgroundColor: '#f0efd5',
              flexDirection: 'row',
            }}>
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
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                marginLeft: 130,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/flash.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                borderWidth: 2,
                borderColor: '#000',
              }}>
              <Image
                source={require('../../../../assets/images/plane.png')}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 15,
                  marginTop: 15,
                }}
              />
            </View>
          </View>

          <AppButton
            title="Save"
            onPress={() => Alert.alert('Simple Button pressed')}
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
    width: widthPercentageToDP('50%'),
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
