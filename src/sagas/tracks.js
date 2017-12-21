import { call, put } from "redux-saga/effects"
import { takeEvery } from "redux-saga"
import { fetchTracksFailed, fetchTracksSuccess } from "../actions/tracks"
import { TRACKS_FETCH } from "../actions/action-types"

const fetchGraphQL = (url, query) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  })
    .then(response => response.json())
    .then(({ data }) => data)
    .then(({ tracks }) => tracks)

export function* getTasks() {
  try {
    const data = yield call(
      fetchGraphQL,
      "http://localhost:8080/graphql",
      `query {
      tracks {
        id
        title
        artists {
          id
          name
        }
        albums {
          id
          title
        }
      }
    }`
    )

    yield put(fetchTracksSuccess(data))
  } catch (exception) {
    yield put(fetchTracksFailed())
    //throw exception
  }
}

export function* watchGetTasks() {
  yield takeEvery(TRACKS_FETCH, getTasks)
}
