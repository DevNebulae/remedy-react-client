import { all } from "redux-saga/effects"
import { watchGetTasks } from "./tracks"

function* rootSaga() {
  yield all([watchGetTasks()])
}

export default rootSaga
