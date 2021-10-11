import { all, put, takeEvery, call, takeLeading } from "redux-saga/effects";
import { actions, api } from "./index";
import { Action } from "./";

function* fetchImages() {
  try {
    const { data } = yield call(api.fetchImages);
    console.log(data);
    yield put(
      actions.fetchImagesFulfilled(data)
    );
  } catch ({ message }) {
    yield put(actions.fetchImagesRejected(message));
  }
}

export function* rootSaga() {
  yield all([
    yield takeEvery(Action.FETCH_IMAGES_REQUEST, fetchImages)
  ]);
}
