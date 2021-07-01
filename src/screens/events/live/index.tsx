import React, { useEffect } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { getEventsActions } from '../../../states/events/events.action';
import { LoadingIndicator } from '../../../components/loading/loading';
import { Selector } from '../../../states/selector';

export const Live = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const events: any = Selector().events;

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    date.setDate(date.getMinutes() + 59);
    return date.getMinutes() + ':' + date.getSeconds();
  };

  useEffect(() => {
    dispatch(getEventsActions());
  }, []);
  return (
    <View style={styles.main_view}>
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
                    style={styles.image_bg}>
                    <Text style={styles.image_bg_text}>
                      Live - {formatTime(y.startTime)}
                    </Text>
                    <View style={styles.image_bg_view}>
                      <Text style={styles.image_bg_view_text}>{y.name}</Text>
                      <Text style={styles.image_bg_view_sub_text}>
                        Indian Premier League
                      </Text>
                    </View>
                  </ImageBackground>
                  <View style={styles.image_sub_view}>
                    <Text style={styles.image_sub_view_text}>Win prize</Text>
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
const styles = StyleSheet.create({
  main_view: { justifyContent: 'center', alignItems: 'center' },
  image_bg: {
    height: heightPercentageToDP('15%'),
    width: widthPercentageToDP('90%'),
    marginTop: 20
  },
  image_bg_text: { marginTop: 20, marginLeft: 20 },
  image_bg_view: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 0,
    bottom: 0
  },
  image_bg_view_text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18
  },
  image_bg_view_sub_text: {
    color: '#FFF',
    fontSize: 10
  },
  image_sub_view: {
    width: widthPercentageToDP('90%'),
    height: 60,
    backgroundColor: '#1f202c'
  },
  image_sub_view_text: {
    color: '#fff',
    marginTop: 20,
    marginLeft: 20
  }
});
