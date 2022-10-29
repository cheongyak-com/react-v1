import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { getArticle, getContent, getFilter } from './api';
import * as types from './actionType';

// content
function* returnFilter() {
  try{
    const response = yield call(getFilter);
    yield put({type: types.FILTER.success, payload: response.data.filter});
  } catch (error) {
    yield put({type: types.FILTER.fail, payload: error});
  }
}
function* callFilter() {
  yield takeLatest(types.FILTER.start, returnFilter);
}

// article list
function* returnArticle() {
  try{
    const response = yield call(getArticle);
    yield put({type: types.ARTICLE.success, payload: response.data.article});
  } catch (error) {
    yield put({type: types.ARTICLE.fail, payload: error});
  }
}
function* callArticle() {
  yield takeLatest(types.ARTICLE.start, returnArticle);
}

// content
function* returnContent(action) {
  try{
    const response = yield call(getContent, action.option);
    yield put({type: types.CONTENT.success, payload: response.data.article[action.option.id]});
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