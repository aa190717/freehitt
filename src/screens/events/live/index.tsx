import React, {useEffect} from 'react';
import {
  Button,
  Image,
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

export const Live = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const events: any = useSelector((state: RootState) => {
    return state.event.events;
  });
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
                  <Image
                    style={{
                      height: heightPercentageToDP('20%'),
                      width: widthPercentageToDP('90%'),
                      marginTop: 20,
                    }}
                    source={{
                      uri: y.url,
                    }}
                  />
                </TouchableOpacity>
              );
            })
          ) : (
            <Text>No event found</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
