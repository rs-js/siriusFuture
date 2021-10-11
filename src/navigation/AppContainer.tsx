import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { Text } from "react-native";
import { actions } from "../store";
import { useDispatch } from "react-redux";
import { FavoritesStack, GalleryStack } from "./";
import { TabIcon } from "./components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export enum Screens {
  Details = "Details",
  Gallery = "Gallery",
  Favorites = "Favorites",
}

const { Navigator, Screen } = createBottomTabNavigator();

enum TabLabel {
  Gallery = "Галлерея",
  Favorites = "Избранное",
}

function getTabBarLabel(routeName: string): string {
  switch (routeName) {
    case Screens.Gallery:
      return TabLabel[Screens.Gallery];
    case Screens.Favorites:
      return TabLabel[Screens.Favorites];
    default:
      return "";
  }
}

export const AppContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchImages());
  }, []);

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={props => ({
          headerShown: false,
          tabBarIcon: params => <TabIcon {...params} {...props} />,
          tabBarLabel: params => (
            <Text
              style={[
                {
                  opacity: params.focused ? 1 : 0.5
                }
              ]}>
              {getTabBarLabel(props.route.name)}
            </Text>
          )
        })}>
        <Screen name={Screens.Gallery} component={GalleryStack} />
        <Screen name={Screens.Favorites} component={FavoritesStack} />
      </Navigator>
    </NavigationContainer>
  );
};
