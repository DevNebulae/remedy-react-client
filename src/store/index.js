import { applyMiddleware, createStore, compose } from "redux"
import { createLogger } from "redux-logger"
import createSagaMiddleware from "redux-saga"
import rootReducer from "../reducers"
import rootSaga from "../sagas"

const enhancers = []
const middleware = [createLogger()]
const saga = createSagaMiddleware()
const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(...middleware, saga), ...enhancers)
)

saga.run(rootSaga)

export default store
