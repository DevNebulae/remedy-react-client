import PropTypes from "prop-types"
import { artistField } from "./artist"
import { trackField } from "./track"

export const AlbumType = PropTypes.shape({
  ...artistField,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  ...trackField
})

export const albumField = {
  albums: PropTypes.arrayOf(AlbumType)
}
