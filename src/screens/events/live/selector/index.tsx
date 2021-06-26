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
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [items2, setItems2] = useState([
    {label: 'Apple1', value: 'apple1'},
    {label: 'Banana1', value: 'banana1'},
  ]);
  const [items3, setItems3] = useState([
    {label: 'Apple3', value: 'apple3'},
    {label: 'Banana3', value: 'banana3'},
  ]);
  const [items4, setItems4] = useState([
    {label: 'Apple4', value: 'apple4'},
    {label: 'Banana4', value: 'banana4'},
  ]);
  const [items5, setItems5] = useState([
    {label: 'Apple5', value: 'apple5'},
    {label: 'Banana5', value: 'banana5'},
  ]);
  const [items6, setItems6] = useState([
    {label: 'Apple6', value: 'apple6'},
    {label: 'Banana6', value: 'banana6'},
  ]);
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Image
            source={require('./sample.jpg')}
            style={{
              height: heightPercentageToDP('20%'),
              width: widthPercentageToDP('100%'),
            }}
          />

          <View style={styles.leftView}>
            <Image source={require('./wicket.png')} style={styles.imageView} />
            <DropDownPicker
              open={spiner}
              value={spinerValue}
              items={items1}
              setOpen={setSpiner}
              setValue={setSpinerValue}
              setItems={setItems1}
              zIndex={5}
              zIndexInverse={4}
              placeholder="Spiner"
              showArrowIcon={false}
              placeholderStyle={styles.placeholderStyle}
            />
          </View>

          <View style={styles.rightView}>
            <Image source={require('./filder.png')} style={styles.imageView} />
            <DropDownPicker
              open={filder}
              value={filderValue}
              items={items2}
              setOpen={setFilder}
              setValue={setFilderValue}
              setItems={setItems2}
              zIndex={2}
              zIndexInverse={1}
              placeholder="Filder"
              showArrowIcon={false}
              placeholderStyle={styles.placeholderStyle}
            />
          </View>

          <View style={styles.leftView}>
            <Image source={require('./keeper.png')} style={styles.imageView} />
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
            />
          </View>

          <View style={styles.rightView}>
            <Image source={require('./bat.png')} style={styles.imageView} />
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
            />
          </View>

          <View style={styles.leftView}>
            <Image source={require('./ball.png')} style={styles.imageView} />
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
            />
          </View>

          <View style={styles.rightView}>
            <Image source={require('./all.png')} style={styles.imageView} />
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
            />
          </View>

          <AppButton
            title="Continue"
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
  },
  imageView: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#777777',
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 9,
  },
  placeholderStyle: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 50,
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
