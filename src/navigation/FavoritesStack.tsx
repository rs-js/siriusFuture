import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Screens } from "./";
import { Favorites, Details } from "../screens";

type FavoritesStackParamList = {
  Favorites: undefined;
  Details: undefined;
}

const { Navigator, Screen } = createNativeStackNavigator<FavoritesStackParamList>();

export const FavoritesStack = () => (
  <Navigator>
    <Screen name={Screens.Favorites} component={Favorites} options={{ title: "Избранное" }} />
    <Screen name={Screens.Details} component={Details}
            options={({ route: { params: { item } } }) => ({ title: item.id })} />
  </Navigator>
);
