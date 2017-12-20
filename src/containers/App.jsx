import { connect } from "react-redux"
import { fetchTracks } from "../actions/tracks"
import { default as Component } from "../components/App"

const mapStateToProps = state => ({
  ...state.tracks
})

const mapDispatchToProps = {
  fetchTracks: fetchTracks
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
