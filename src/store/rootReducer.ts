import { Action, IAction, IState } from "./";
import { Reducer } from "redux";

const initialState: IState = {
  pending: false,
  error: null,
  data: [],
  favorites: []
};

export const rootReducer: Reducer<IState, IAction> = (
  state = initialState,
  { data, type, error }: IAction
): IState => {
  switch (type) {
    case Action.FETCH_IMAGES_REQUEST:
      return {
        ...state,
        pending: true,
        error: null
      };
    case Action.FETCH_IMAGES_FULFILLED:
      return {
        ...state,
        data,
        pending: false,
        error: null
      };
    case Action.DELETE_IMAGE_REQUEST:
      return {
        ...state,
        data: state.data.filter(({ id }) => id != data.imageId),
        pending: false,
        error: null
      };
    case Action.ADD_TO_FAVORITES:
      let set1 = new Set(state.favorites);
      set1.add(data.imageId);
      return {
        ...state,
        favorites: Array.from(set1),
        pending: false,
        error: null
      };
    case Action.REMOVE_FROM_FAVORITES:
      let set2 = new Set(state.favorites);
      set2.delete(data.imageId)
      return {
        ...state,
        favorites: Array.from(set2),
        pending: false,
        error: null
      };
    case Action.FETCH_IMAGES_REJECTED:
      return {
        ...state,
        error
      };
    default:
      return state;
  }
};
