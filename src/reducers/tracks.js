import {
  TRACKS_FETCH_FAILED,
  TRACKS_FETCH_SUCCESS
} from "../actions/action-types"

export default function tasks(
  state = { data: [], loading: false, error: null },
  { type, loading, error, data }
) {
  switch (type) {
    case TRACKS_FETCH_FAILED:
      return { ...state, loading, error }
    case TRACKS_FETCH_SUCCESS:
      return { data, loading, error }
    default:
      return state
  }
}
