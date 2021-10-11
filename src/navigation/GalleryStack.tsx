import React from "react";
import { Screens } from "./";
import { Gallery, Details } from "../screens";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { Picture } from "../store";

export type GalleryStackParamList = {
  Gallery: undefined;
  Details: { item: Picture };
}

type GalleryScreenNavigationProp = NativeStackScreenProps<GalleryStackParamList>;
type DetailsScreenRouteProp = RouteProp<GalleryStackParamList, Screens.Details>;

export type DetailsProps = {
  navigation: GalleryScreenNavigationProp;
  route: DetailsScreenRouteProp;
};

const { Navigator, Screen } = createNativeStackNavigator<GalleryStackParamList>();

export const GalleryStack = () => (
  <Navigator>
    <Screen name={Screens.Gallery} component={Gallery} options={{ title: "Все изображения" }} />
    <Screen name={Screens.Details} component={Details}
            options={({ route: { params: { item } } }) => ({ title: item.id })} />
  </Navigator>
);
