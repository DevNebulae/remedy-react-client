import {
  TRACKS_FETCH,
  TRACKS_FETCH_SUCCESS,
  TRACKS_FETCH_FAILED
} from "./action-types"

export const fetchTracks = () => ({
  type: TRACKS_FETCH,
  loading: true
})

export const fetchTracksSuccess = data => ({
  type: TRACKS_FETCH_SUCCESS,
  loading: false,
  error: null,
  data
})

export const fetchTracksFailed = () => ({
  type: TRACKS_FETCH_FAILED,
  loading: false,
  error: true
})
