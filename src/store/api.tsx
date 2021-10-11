import axios from 'axios';
import { Constants } from "./constants";

const headers = { Authorization: `Client-ID ${Constants.accessKey}` };

const {get} = axios.create({baseURL: Constants.baseURL, headers});

export const api = {
  fetchImages: () => get('photos?per_page=50'),
};
