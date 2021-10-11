import { ActivityIndicator, Dimensions, Pressable, StyleSheet } from "react-native";
import { Screens } from "../../navigation";
import FastImage from "react-native-fast-image";
import React, { useCallback, useState } from "react";
import { actions, IState, Picture, selectors } from "../../store";
import { useNavigation } from "@react-navigation/native";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const PictureCell = ({ item }: { item: Picture }) => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const typedUseSelector: TypedUseSelectorHook<IState> = useSelector;
  const favorites = typedUseSelector(selectors.favorites);
  const isFavorite = favorites.includes(item.id);

  const removeFromFavorites = useCallback(() => {
    dispatch(actions.removeFromFavorites(item.id));
  }, []);

  return (
    <Pressable
      onPress={() => navigate(Screens.Details, { item })}>
      <FastImage
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        style={styles.smallImage}
        source={{ uri: item.urls.thumb }}
        resizeMode={FastImage.resizeMode.cover}
      >
        {loading && <ActivityIndicator animating={loading} />}
        {isFavorite && <Pressable
          style={styles.favorite}
          onPress={removeFromFavorites}
        >
          <MaterialCommunityIcons name={"heart"} size={20}
                                  color={"#f00"} />
        </Pressable>}
      </FastImage>
    </Pressable>);
};

const styles = StyleSheet.create({
  smallImage: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    resizeMode: "cover",
    width: Dimensions.get("screen").width / 4,
    height: Dimensions.get("screen").width / 4
  },
  favorite: {
    alignSelf: "flex-end",
    padding: 5
  }
});
