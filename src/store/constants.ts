
export enum Constants {
  baseURL = "https://api.unsplash.com/",
  accessKey = "qIm1_Vr7f5BzRunDHPBOs1MShBb3eDfn_04mRzsJ444"
}

export interface IState {
  favorites: string[];
  data: Picture[];
  pending: boolean;
  error: string | null;
}

export type IAction = {
  data: any;
  type: string;
  error: string;
};

export interface Picture {
  id:                       string;
  created_at:               Date;
  updated_at:               Date;
  promoted_at:              Date | null;
  width:                    number;
  height:                   number;
  color:                    string;
  blur_hash:                string;
  description:              null | string;
  alt_description:          null | string;
  urls:                     Urls;
  categories:               any[];
  likes:                    number;
  liked_by_user:            boolean;
  current_user_collections: any[];
}

export interface Urls {
  raw:     string;
  full:    string;
  regular: string;
  small:   string;
  thumb:   string;
}

export interface OAction<Payload = {} | any> {
  type: string;
  payload: Payload;
}

export enum Action {
  FETCH_IMAGES_REQUEST = "FETCH_IMAGES_REQUEST",
  FETCH_IMAGES_FULFILLED = "FETCH_IMAGES_FULFILLED",
  FETCH_IMAGES_REJECTED = "FETCH_IMAGES_REJECTED",
  DELETE_IMAGE_REQUEST = "DELETE_IMAGE_REQUEST",

  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES",
}
