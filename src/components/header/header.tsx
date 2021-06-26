import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import WithLocalSvg, {SvgUri} from 'react-native-svg';

const Header = props => {
  const {navigationState, navigation, activeTintColor, inactiveTintColor} =
    props;
  const activeTabIndex = navigation.state.index;

  return (
    <View>
      <View>
        <Image
          source={require('./sample.jpg')}
          style={{
            height: heightPercentageToDP('20%'),
            width: widthPercentageToDP('100%'),
          }}
        />
      </View>
      <View style={styles.tabContainer}>
        {navigationState.routes.map((route, index) => {
          const isRouteActive = index === activeTabIndex;
          const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

          return (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate(route.routeName)}
              key={route.routeName}>
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    textTransform: 'uppercase',
                    color: `${tintColor}`,
                    fontWeight: `${isRouteActive ? 'bold' : 'normal'}`,
                  }}>
                  {route.routeName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
  },
  textContainer: {
    marginVertical: 30,
    paddingTop: 30,
  },
  textWhite: {
    color: 'black',
  },
  tabContainer: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 60,
  },
  stretch: {
    width: 50,
    height: 20,
    resizeMode: 'stretch',
  },
});
export default Header;
