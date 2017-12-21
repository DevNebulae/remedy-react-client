import { TrackType } from "../prop-types/track"
import PropTypes from "prop-types"
import React from "react"
import Track from "./Track"

const TrackList = tracks => {
  if (tracks.loading) return <h1>Loading data</h1>
  else if (tracks.error) return <h1>Error while loading data</h1>
  else
    return (
      <ul>
        {tracks.data.map((track, index) => (
          <Track key={`track-${track.id}`} index={index + 1} track={track} />
        ))}
      </ul>
    )
}

TrackList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.arrayOf(TrackType)
}

export default TrackList
