import { call, put, takeLatest } from "redux-saga/effects";
import { apiGetFilter } from "../../api/filter/api";
import { GetFilterResponseType } from "../../api/filter/types";
import { getFilterAsync, FILTER_REQUEST } from "./actions";

function* getFilterSaga(
  action: ReturnType<typeof getFilterAsync.request>
) {
  try {
    const response: GetFilterResponseType = yield call(
      apiGetFilter,
      action.payload
    );

    console.log('READ', response);
    yield put(getFilterAsync.success(response));
  } catch (error: any) {
    yield put(getFilterAsync.failure(error));
  }
}

export function* filterSaga() {
  yield takeLatest(FILTER_REQUEST, getFilterSaga);
}

export { filterSaga as default };
