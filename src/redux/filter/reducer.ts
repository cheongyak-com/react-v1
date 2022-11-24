import { createReducer } from "typesafe-actions";
import { filterState, filterAction } from "./types";
import { SET_FILTER, FILTER_REQUEST, FILTER_SUCCESS, FILTER_FAILURE } from "./actions";

const initialState: filterState = {
  data: []
};

const reducer = createReducer<filterState, filterAction>(initialState, {
  [SET_FILTER]: (state, action) => {
    return {
    ...state,
    data: action.payload,
  }},
  [FILTER_REQUEST]: (state, action) => {
    return {
    ...state,
    data: action.payload,
  }},
  [FILTER_SUCCESS]: (state, action) => {
    return {
    ...state,
    data: action.payload,
  }},
  [FILTER_FAILURE]: (state, action) => {
    return {
    ...state,
    data: action.payload,
  }},
});

export default reducer;
