import { createSelector } from "reselect";
import { IState } from "./";

export const selectors = {
  pending: createSelector(
    (state: IState) => state.pending,
    (data) => data
  ),
  images: createSelector(
    (state: IState) => state.data,
    (data) => data
  ),
  favoritesImages: createSelector(
    (state: IState) => state,
    (state) => state.data.filter(({id}) => state.favorites.includes(id))
  ),
  favorites: createSelector(
    (state: IState) => state.favorites,
    (data) => data
  ),
};
