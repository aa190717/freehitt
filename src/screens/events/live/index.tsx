import React, {useEffect} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {getEventsActions} from '../../../states/events/events.action';
import {RootState} from '../../../states/store';

export const Live = () => {
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
                <Image
                  key={i}
                  style={{
                    height: heightPercentageToDP('20%'),
                    width: widthPercentageToDP('90%'),
                    marginTop: 20,
                  }}
                  source={{
                    uri: y.url,
                  }}
                />
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
