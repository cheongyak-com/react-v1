import { combineReducers } from 'redux';
import * as types from './actionType';

const filterReducer = (state = {filter: []}, action)=>{
  switch(action.type) {
    case types.FILTER.start:
      return state;

    case types.FILTER.success:
      return { ...state, filter: action.payload }

    case types.FILTER.fail:
      return { ...state, filter: action.payload }
    
    default:
      return state;
  }
}

const articleReducer = (state = {article: []}, action)=>{
  switch(action.type) {
    case types.ARTICLE.start:
      return state;

    case types.ARTICLE.success:
      return { ...state, article: action.payload }

    case types.ARTICLE.fail:
      return { ...state, article: action.payload }
    
    default:
      return state;
  }
}

const contentReducer = (state = {content: []}, action)=>{
  switch(action.type) {
    case types.CONTENT.start:
      return state;

    case types.CONTENT.success:
      return { ...state, content: action.payload }

    case types.CONTENT.fail:
      return { ...state, content: action.payload }
    
    default:
      return state;
  }
}

const reducers = combineReducers({ filterReducer, articleReducer, contentReducer });

export default reducers;