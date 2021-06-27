import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Icon} from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export const SelectorScreen = () => {
  const navigation = useNavigation();
  const [spiner, setSpiner] = useState(false);
  const [spinerValue, setSpinerValue] = useState(false);

  const [filder, setFilder] = useState(false);
  const [filderValue, setFilderValue] = useState(false);

  const [keeper, setKeeper] = useState(false);
  const [keeperValue, setKeeperValue] = useState(false);

  const [batsman, setBatsman] = useState(false);
  const [batsmanValue, setBatsmanValue] = useState(false);

  const [pacer, setPacer] = useState(false);
  const [pacerValue, setPacerValue] = useState(false);

  const [allrounder, setAllrounder] = useState(false);
  const [allrounderValue, setAllrounderValue] = useState(false);

  const [items1, setItems1] = useState([
    {label: 'R Ashwin', value: 'ashwin'},
    {label: 'R Jadeja', value: 'jadeja'},
  ]);
  const [items2, setItems2] = useState([
    {label: 'H Pandya', value: 'hpandya'},
    {label: 'R Jadeja', value: 'rvjadeja'},
  ]);
  const [items3, setItems3] = useState([
    {label: 'M.S Dhoni', value: 'dhoni'},
    {label: 'R Pant', value: 'pant'},
  ]);
  const [items4, setItems4] = useState([
    {label: 'V Kohli', value: 'kohli'},
    {label: 'R Sharma', value: 'sharma'},
  ]);
  const [items5, setItems5] = useState([
    {label: 'J Bhumra', value: 'bhumra'},
    {label: 'M Shami', value: 'shami'},
  ]);
  const [items6, setItems6] = useState([
    {label: 'H Pandya', value: 'pandya'},
    {label: 'R Jedeja', value: 'rjadeja'},
  ]);
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

          <View style={{...styles.leftView, zIndex: 90}}>
            <Image
              source={require('../../../../assets/images/wicket.png')}
              style={styles.imageView}
            />
            <DropDownPicker
              open={spiner}
              value={spinerValue}
              items={items1}
              setOpen={setSpiner}
              setValue={setSpinerValue}
              setItems={setItems1}
              zIndex={9}
              zIndexInverse={8}
              placeholder="Spiner"
              showArrowIcon={false}
              placeholderStyle={styles.placeholderStyle}
              textStyle={{marginLeft: 50, fontWeight: 'bold'}}
              listItemLabelStyle={{marginLeft: 20}}
              listMode="SCROLLVIEW"
              dropDownDirection="BOTTOM"
            />
          </View>

          <View style={{...styles.rightView, zIndex: 80}}>
            <Image
              source={require('../../../../assets/images/filder.png')}
              style={styles.imageView}
            />
            <DropDownPicker
              open={filder}
              value={filderValue}
              items={items2}
              setOpen={setFilder}
              setValue={setFilderValue}
              setItems={setItems2}
              zIndex={6}
              zIndexInverse={5}
              placeholder="Filder"
              showArrowIcon={false}
              placeholderStyle={styles.placeholderStyle}
              textStyle={{marginLeft: 50, fontWeight: 'bold'}}
              listItemLabelStyle={{marginLeft: 20}}
              listMode="SCROLLVIEW"
              dropDownDirection="BOTTOM"
            />
          </View>

          <View style={{...styles.leftView, zIndex: 70}}>
            <Image
              source={require('../../../../assets/images/keeper.png')}
              style={styles.imageView}
            />
            <DropDownPicker
              open={keeper}
              value={keeperValue}
              items={items3}
              setOpen={setKeeper}
              setValue={setKeeperValue}
              setItems={setItems3}
              zIndex={2}
              zIndexInverse={1}
              placeholder="Keeper"
              showArrowIcon={false}
              placeholderStyle={styles.placeholderStyle}
              textStyle={{marginLeft: 50, fontWeight: 'bold'}}
              listItemLabelStyle={{marginLeft: 20}}
              listMode="SCROLLVIEW"
              dropDownDirection="BOTTOM"
            />
          </View>

          <View style={{...styles.rightView, zIndex: 60}}>
            <Image
              source={require('../../../../assets/images/bat.png')}
              style={styles.imageView}
            />
            <DropDownPicker
              open={batsman}
              value={batsmanValue}
              items={items4}
              setOpen={setBatsman}
              setValue={setBatsmanValue}
              setItems={setItems4}
              zIndex={2}
              zIndexInverse={1}
              placeholder="Batsman"
              showArrowIcon={false}
              placeholderStyle={styles.placeholderStyle}
              textStyle={{marginLeft: 50, fontWeight: 'bold'}}
              listItemLabelStyle={{marginLeft: 20}}
              listMode="SCROLLVIEW"
              dropDownDirection="BOTTOM"
            />
          </View>

          <View style={{...styles.leftView, zIndex: 50}}>
            <Image
              source={require('../../../../assets/images/ball.png')}
              style={styles.imageView}
            />
            <DropDownPicker
              open={pacer}
              value={pacerValue}
              items={items5}
              setOpen={setPacer}
              setValue={setPacerValue}
              setItems={setItems5}
              zIndex={2}
              zIndexInverse={1}
              placeholder="Pacer"
              showArrowIcon={false}
              placeholderStyle={styles.placeholderStyle}
              textStyle={{marginLeft: 50, fontWeight: 'bold'}}
              listItemLabelStyle={{marginLeft: 20}}
              listMode="SCROLLVIEW"
              dropDownDirection="BOTTOM"
            />
          </View>

          <View style={{...styles.rightView, zIndex: 40}}>
            <Image
              source={require('../../../../assets/images/all.png')}
              style={styles.imageView}
            />
            <DropDownPicker
              open={allrounder}
              value={allrounderValue}
              items={items6}
              setOpen={setAllrounder}
              setValue={setAllrounderValue}
              setItems={setItems6}
              zIndex={2}
              zIndexInverse={1}
              placeholder="All rounder"
              showArrowIcon={false}
              placeholderStyle={styles.placeholderStyle}
              textStyle={{marginLeft: 50, fontWeight: 'bold'}}
              listItemLabelStyle={{marginLeft: 20}}
              listMode="SCROLLVIEW"
              dropDownDirection="BOTTOM"
            />
          </View>

          <AppButton
            title="Continue"
            onPress={() => navigation.navigate('Confirm')}
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
  },
  rightView: {
    width: widthPercentageToDP('60%'),
    marginRight: 10,
    marginTop: 20,
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
