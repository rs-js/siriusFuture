import React from 'react';
import {Animated} from 'react-native';
import {Screens} from '../../AppContainer';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const TabIcon = ({route, focused}) => {
  let animated = new Animated.Value(0);

  const materialIcon = (name: string) => (
    <MaterialIcon
      name={name}
      color="#FFC0CB"
      style={{
        opacity: focused ? 1 : 0.5,
        fontSize: 25,
      }}
    />
  );

  function getTabBarIcon(screen: string) {
    switch (screen) {
      case Screens.Gallery:
        return materialIcon('image-multiple-outline');
      case Screens.Favorites:
        return materialIcon('star-outline');
      default:
        return null;
    }
  }

  const getIconTransform = () => {
    return {
      transform: [
        {
          scale: animated.interpolate({
            inputRange: [0, 0.7, 1],
            outputRange: [1, 1.5, 1],
          }),
        },
      ],
    };
  };

  return (
    <Animated.View style={getIconTransform()}>
      {getTabBarIcon(route.name)}
    </Animated.View>
  );
};
