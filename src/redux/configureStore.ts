import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import  { rootReducer, rootSaga } from ".";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  //이제 선언한 모든 Saga를 미들웨어에 등록하고 미들웨어는 계속해서 액션을 감지한다.
  sagaMiddleware.run(rootSaga);

  return store;
}
