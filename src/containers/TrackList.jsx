import { connect } from "react-redux"
import { default as Component } from "../components/TrackList"

const mapStateToProps = state => ({
  ...state.tracks
})

const TrackList = connect(mapStateToProps)(Component)

export default TrackList
