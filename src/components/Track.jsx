import PropTypes from "prop-types"
import React from "react"
import { TrackType } from "../prop-types/track"

const Track = ({ artists, index, track }) => (
  <li>
    {index}. {artists[0].name}- {track.title}
  </li>
)

Track.propTypes = {
  index: PropTypes.number.isRequired,
  track: TrackType
}

export default Track
