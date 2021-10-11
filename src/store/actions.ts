import { Action, Picture } from "./";

export const actions = {
  fetchImages: () => ({
    type: Action.FETCH_IMAGES_REQUEST
  }),
  fetchImagesFulfilled: (data: Picture[]) => ({
    type: Action.FETCH_IMAGES_FULFILLED,
    data
  }),
  fetchImagesRejected: (error: string) => ({
    type: Action.FETCH_IMAGES_REJECTED,
    error
  }),
  deleteImage: (imageId: string) => ({
    type: Action.DELETE_IMAGE_REQUEST,
    data: {imageId}
  }),
  addToFavorites: (imageId: string) => ({
    type: Action.ADD_TO_FAVORITES,
    data: {imageId}
  }),
  removeFromFavorites: (imageId: string) => ({
    type: Action.REMOVE_FROM_FAVORITES,
    data: {imageId}
  }),
};
