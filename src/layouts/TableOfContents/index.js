import React from 'react'
import { Box } from '@smooth-ui/core-em'
import Link from 'gatsby-link'

import H2Anchor from './H2Anchor'
import H3Anchor from './H3Anchor'

const TableOfContents = ({ data, pagePath }) => {
  return (
    <Box borderLeft="1px solid gray" pl={2}>
      {data.items.map(
        (lvl1Item, lvl1Index) =>
          lvl1Item.items &&
          lvl1Item.items.map((lvl2Item, lvl2Index) => (
            <Box key={`${lvl1Index}-${lvl2Index}`}>
              <H2Anchor as={Link} to={`${pagePath}${lvl2Item.url}`}>
                {lvl2Item.title}
              </H2Anchor>
              {lvl2Item.items &&
                lvl2Item.items.map((lvl3Item, index) => (
                  <H3Anchor
                    pl={2}
                    as={Link}
                    key={index}
                    to={`${pagePath}${lvl3Item.url}`}
                  >
                    {lvl3Item.title}
                  </H3Anchor>
                ))}
            </Box>
          ))
      )}
    </Box>
  )
}

export default TableOfContents
