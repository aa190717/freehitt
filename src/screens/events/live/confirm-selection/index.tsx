import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP
} from 'react-native-responsive-screen';

const AppButton = ({ onPress, title }) => (
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
            style={styles.confirm_header_img}
          />
          <View style={styles.sub_header_view}>
            <Text style={{ marginLeft: 20, marginTop: 15, fontWeight: 'bold' }}>
              Banglore vs Mumbai
            </Text>
          </View>

          <View style={{ ...styles.leftView, backgroundColor: '#d5d8f0' }}>
            <Text style={styles.player_name}>Virat Kohli</Text>
          </View>
          <View style={{ ...styles.rightView, backgroundColor: '#e3f0d5' }}>
            <Text style={styles.player_name}>Shikhar Dhawan</Text>
          </View>
          <View style={{ ...styles.leftView, backgroundColor: '#f0e4d5' }}>
            <Text style={styles.player_name}>Shreyas Iyer</Text>
          </View>
          <View style={{ ...styles.rightView, backgroundColor: '#f0d5d5' }}>
            <Text style={styles.player_name}>Ajinkya Rahane</Text>
          </View>
          <View style={{ ...styles.leftView, backgroundColor: '#d5e3f0' }}>
            <Text style={styles.player_name}>R Ashwin</Text>
          </View>
          <View style={{ ...styles.rightView, backgroundColor: '#f0efd5' }}>
            <Text style={styles.player_name}>KL Rahul</Text>
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
  leftView: {
    width: widthPercentageToDP('60%'),
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    height: 50,
    backgroundColor: 'blue'
  },
  rightView: {
    width: widthPercentageToDP('60%'),
    marginRight: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    position: 'relative',
    height: 50,
    backgroundColor: 'yellow'
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
    marginBottom: 30
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  player_name: {
    marginLeft: 40,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 15,
    fontSize: 18
  },
  confirm_header_img: {
    height: heightPercentageToDP('20%'),
    width: widthPercentageToDP('100%')
  },
  sub_header_view: {
    height: 50,
    width: widthPercentageToDP('100%'),
    backgroundColor: '#D1CBCB'
  }
});
