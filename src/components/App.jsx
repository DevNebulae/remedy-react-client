import PropTypes from "prop-types"
import React from "react"
import TrackList from "../containers/TrackList"

export default class App extends React.Component {
  static propTypes = {
    fetchTracks: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchTracks()
  }

  render() {
    return (
      <ul>
        {this.props.data.map((track, index) => (
          <li key={`track-${track.id}`}>
            {index}. {track.title}
          </li>
        ))}
      </ul>
    )
  }
}
