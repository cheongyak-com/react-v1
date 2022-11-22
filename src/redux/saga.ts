import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { getArticle, getContent, getFilter } from './api';
import * as types from './actionType';

interface TypeAction {
  option: any,
}

interface TypeResponse {
  data: any;
}


// content
function* returnFilter() {
  try{
    const response: TypeResponse = yield call(getFilter);
    yield put({type: types.FILTER.success, payload: response.data.filter});
  } catch (error) {
    yield put({type: types.FILTER.fail, payload: error});
  }
}
function* callFilter() {
  yield takeLatest(types.FILTER.start, returnFilter);
}

// article list
function* returnArticle(action?: TypeAction) {
  try{
    const response: TypeResponse = yield call(getArticle, action?.option);
    yield put({type: types.ARTICLE.success, payload: response.data});
  } catch (error) {
    yield put({type: types.ARTICLE.fail, payload: error});
  }
}
function* callArticle() {
  yield takeLatest(types.ARTICLE.start, returnArticle);
}

// content
function* returnContent(action?: TypeAction) {
  try{
    const response: TypeResponse = yield call(getContent, action?.option);
    yield put({type: types.CONTENT.success, payload: response.data.data});
  } catch (error) {
    yield put({type: types.CONTENT.fail, payload: error});
  }
}
function* callContent() {
  yield takeLatest(types.CONTENT.start, returnContent);
}

export default function* rootSaga(){
  yield all([fork(callFilter), fork(callArticle), fork(callContent)]);
}