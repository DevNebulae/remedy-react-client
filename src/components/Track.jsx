import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { TrackType } from "../prop-types/track"

const VerticalCenterContainer = styled.div`
  display: flex;
  height: inherit;

  & > * {
    margin: auto 0;
    width: 100%;
  }
`

const TrackNumber = styled.p`
  margin: auto 0;
  width: 100%;
  text-align: right;
`

const TrackData = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const TrackTitle = styled.span`
  margin-top: auto;
`

const TrackMetadata = styled.div`
  font-size: 0.8em;
`

const TrackWrapper = styled.li`
  height: 64px;
  display: grid;
  grid-template-columns: 3em auto 3em;
  grid-gap: 1.5em;

  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.06);
  }
`

const Track = ({ index, track }) => (
  <TrackWrapper>
    <VerticalCenterContainer>
      <TrackNumber>{index}.</TrackNumber>
    </VerticalCenterContainer>

    <TrackData>
      <TrackTitle>{track.title}</TrackTitle>
      <TrackMetadata>
        <span>{track.artists[0].name}</span> <span>-</span>{" "}
        <span>{track.albums[0].title}</span>
      </TrackMetadata>
    </TrackData>

    <VerticalCenterContainer>
      <span>2:30</span>
    </VerticalCenterContainer>
  </TrackWrapper>
)

Track.propTypes = {
  index: PropTypes.number.isRequired,
  track: TrackType
}

export default Track
