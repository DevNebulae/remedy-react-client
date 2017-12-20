import PropTypes from "prop-types"
import { albumField } from "./album"
import { trackField } from "./track"

const ArtistType = PropTypes.shape({
  ...albumField,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  ...trackField
})

export const artistField = {
  artist: PropTypes.arrayOf(ArtistType)
}
