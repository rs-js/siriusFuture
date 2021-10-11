import React from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IState, selectors } from "../../store";
import { PictureCell } from "../components/pictureCell";
import MasonryList from "@react-native-seoul/masonry-list";


export const Gallery = () => {
  const typedUseSelector: TypedUseSelectorHook<IState> = useSelector;
  const images = typedUseSelector(selectors.images);

  return (
    <MasonryList
      data={images}
      numColumns={4}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, i }) =>
        <PictureCell item={item} i={i} />
      }
    />
  );
};
