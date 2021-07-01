import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP
} from 'react-native-responsive-screen';

const Header = props => {
  const { navigationState, navigation, activeTintColor, inactiveTintColor } =
    props;
  const activeTabIndex = navigation.state.index;

  return (
    <View>
      <View>
        <Image
          source={require('../../assets/images/banner.png')}
          style={{
            maxHeight: heightPercentageToDP('20%'),
            width: widthPercentageToDP('100%')
          }}
        />
      </View>
      <View style={styles.tab_container}>
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
                    ...styles.tab_names,
                    color: `${tintColor}`,
                    fontWeight: `${isRouteActive ? 'bold' : 'normal'}`
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
  tab_container: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 60
  },
  tab_names: {
    fontSize: 17,
    textTransform: 'uppercase'
  }
});
export default Header;
