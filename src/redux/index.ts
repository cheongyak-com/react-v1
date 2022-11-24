import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { createWrapper } from 'next-redux-wrapper';
import filter, { filterSaga } from "./filter";
import configureStore from "./configureStore";

export const rootReducer = combineReducers({
  filter,
});

export type RootState = ReturnType<typeof rootReducer>;
export function* rootSaga() {
  yield all([filterSaga()]);
}

const wrapper: any = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper;