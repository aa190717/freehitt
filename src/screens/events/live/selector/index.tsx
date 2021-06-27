import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
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
import SelectDropdown from 'react-native-select-dropdown';

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export const SelectorScreen = () => {
  const navigation = useNavigation();
  const spiner = ['R Ashwin', 'R Jadeja'];
  const filder = ['H Pandya', 'R Jadeja'];
  const keeper = ['M.S Dhoni', 'R Pant'];
  const batsman = ['V Kohli', 'R Sharma'];
  const pacer = ['J Bhumra', 'M Shami'];
  const allrounder = ['H Pandya', 'R Jedeja'];
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
          <View style={{marginLeft: 20, marginRight: 20,}}>
            <View
              style={{
                ...styles.leftView,
              }}>
              <Image
                source={require('../../../../assets/images/wicket.png')}
                style={styles.imageView}
              />
              <SelectDropdown
                data={spiner}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'Spiner'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </View>

            <View
              style={{
                ...styles.rightView,
              }}>
              <Image
                source={require('../../../../assets/images/filder.png')}
                style={styles.imageView}
              />
              <SelectDropdown
                data={filder}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'Filder'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </View>

            <View
              style={{
                ...styles.leftView,
              }}>
              <Image
                source={require('../../../../assets/images/filder.png')}
                style={styles.imageView}
              />
              <SelectDropdown
                data={keeper}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'Keeper'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </View>

            <View
              style={{
                ...styles.rightView,
              }}>
              <Image
                source={require('../../../../assets/images/filder.png')}
                style={styles.imageView}
              />
              <SelectDropdown
                data={batsman}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'Batsman'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </View>

            <View
              style={{
                ...styles.leftView,
              }}>
              <Image
                source={require('../../../../assets/images/filder.png')}
                style={styles.imageView}
              />
              <SelectDropdown
                data={pacer}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'Pacer'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </View>

            <View
              style={{
                ...styles.rightView,
                zIndex: 80,
              }}>
              <Image
                source={require('../../../../assets/images/filder.png')}
                style={styles.imageView}
              />
              <SelectDropdown
                data={allrounder}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'All rounder'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </View>

            <AppButton
              title="Continue"
              onPress={() => navigation.navigate('Confirm')}
            />
          </View>
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
    flexDirection: 'row',
    alignSelf: 'flex-start',
    position: 'relative',
  },
  rightView: {
    width: widthPercentageToDP('60%'),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    position: 'relative',
  },
  imageView: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#777777',
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'gray',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: widthPercentageToDP('80%'),
    marginLeft: 20,
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
  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    marginTop: 20,
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'center'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});
