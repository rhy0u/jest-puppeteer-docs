import React from 'react'
import ArrowDown from 'components/icons/ArrowDown'
import ArrowUp from 'components/icons/ArrowUp'

const Arrows = ({ toggled }) => (
  <>
    {toggled ? (
      <ArrowUp style={{ flexShrink: 0 }} />
    ) : (
      <ArrowDown style={{ flexShrink: 0 }} />
    )}
  </>
)

export default Arrows
