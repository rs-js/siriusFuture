import React from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IState, selectors } from "../../store";
import MasonryList from "@react-native-seoul/masonry-list";
import { PictureCell } from "../components/pictureCell";

export const Favorites = () => {
  const typedUseSelector: TypedUseSelectorHook<IState> = useSelector;
  const favoritesImages = typedUseSelector(selectors.favoritesImages);
  return (
    <MasonryList
      data={favoritesImages}
      numColumns={4}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, i }) =>
        <PictureCell item={item} i={i} />
      }
    />
  );
};
