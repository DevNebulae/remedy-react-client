import PropTypes from "prop-types"
import { artistField } from "./artist"
import { albumField } from "./album"

export const TrackType = PropTypes.shape({
  ...artistField,
  ...albumField,
  id: PropTypes.string.isRequired,
  title: PropTypes.string
})

export const trackField = {
  tracks: PropTypes.arrayOf(TrackType)
}
