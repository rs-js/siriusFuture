import React, { useCallback, useState } from "react";
import {
  Dimensions,
  StyleSheet, Text,
  View,
  Pressable, ActivityIndicator
} from "react-native";
import { DetailsProps } from "../../navigation";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { actions, IState, selectors } from "../../store";
import FastImage from "react-native-fast-image";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Details = ({ navigation: { goBack }, route: { params: { item } } }: DetailsProps) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const typedUseSelector: TypedUseSelectorHook<IState> = useSelector;
  const favorites = typedUseSelector(selectors.favorites);

  const addToFavorites = useCallback(() => {
    dispatch(actions.addToFavorites(item.id));
  }, []);

  const removeFromFavorites = useCallback(() => {
    dispatch(actions.removeFromFavorites(item.id));
  }, []);

  const deleteImage = useCallback(() => {
    dispatch(actions.deleteImage(item.id));
    goBack();
  }, []);

  const isFavorite = favorites.includes(item.id);

  return (
    <View style={styles.container}>
      <FastImage
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        style={styles.image}
        source={{ uri: item.urls.full }}
        resizeMode={FastImage.resizeMode.cover}
      >
        <ActivityIndicator animating={loading} />
      </FastImage>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={isFavorite ? removeFromFavorites : addToFavorites}>
          <MaterialCommunityIcons name={isFavorite ? "heart" : "heart-outline"} size={20}
                                  color={isFavorite ? "#f00" : "#000"} />
          <Text
            style={styles.text}>{isFavorite ? "Убрать из избранного" : "Добавить в избранное"}</Text>
        </Pressable>
        <View style={styles.divider} />
        <Pressable style={styles.button} onPress={deleteImage}>
          <MaterialCommunityIcons name="trash-can" size={20} />
          <Text style={styles.text}>Удалить изображение</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#000"
  },
  buttons: {
    borderRadius: 10,
    backgroundColor: "#fff",
    marginHorizontal: 10
  },
  button: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  divider: {
    borderWidth: 0.5,
    color: "#ccc"
  },
  text: {
    fontSize: 20
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 2
  }
});
