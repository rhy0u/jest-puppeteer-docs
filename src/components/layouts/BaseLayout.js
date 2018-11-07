import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@smooth-ui/core-sc'
import Layout from 'components/layouts/Layout'

import 'components/layout.css'

const BaseLayout = ({ children }) => (
  <Layout>
    <Box m="auto" maxWidth={960} p={20}>
      {children}
    </Box>
  </Layout>
)

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout
