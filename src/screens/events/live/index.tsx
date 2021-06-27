import React, {useEffect} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {getEventsActions} from '../../../states/events/events.action';
import {RootState} from '../../../states/store';
import {LoadingIndicator} from '../../../components/loading/loading';

export const Live = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const events: any = useSelector((state: RootState) => {
    return state.event.events;
  });
  const date = new Date();
  date.setDate(date.getMinutes() + 59);
  const time = date.getMinutes() + ':' + date.getSeconds();
  useEffect(() => {
    dispatch(getEventsActions());
  }, []);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <SafeAreaView>
        <ScrollView>
          {events ? (
            events.map((y: any, i: any) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => navigation.navigate('Selector')}>
                  <ImageBackground
                    source={require('../../../assets/images/event.png')}
                    style={{
                      height: heightPercentageToDP('15%'),
                      width: widthPercentageToDP('90%'),
                      marginTop: 20,
                    }}>
                    <Text style={{marginTop: 20, marginLeft: 20}}>
                      Live - {time}
                    </Text>
                    <View
                      style={{
                        position: 'absolute',
                        top: 90,
                        left: 20,
                        right: 0,
                        bottom: 0,
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#FFF',
                          fontSize: 18,
                        }}>
                        Banglore vs Mumbai
                      </Text>
                      <Text style={{color: '#FFF', fontSize: 10}}>
                        Indian Premier League
                      </Text>
                    </View>
                  </ImageBackground>
                  <View
                    style={{
                      width: widthPercentageToDP('90%'),
                      height: 60,
                      backgroundColor: '#1f202c',
                    }}>
                    <Text
                      style={{color: '#fff', marginTop: 20, marginLeft: 20}}>
                      Win prize
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <LoadingIndicator />
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
