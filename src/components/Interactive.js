import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { styled, Box } from '@smooth-ui/core-sc'
import PropDesc from 'utils/PropDesc'
import { getSystemPropDesc } from 'utils/getSystemPropDesc'
import { PropsTable } from 'components/PropsTable'

const Editor = styled(LiveEditor)`
  overflow: scroll;
  padding: 10px;
  border-radius: 3px;
  max-height: 400px;
  margin: 25px -20px !important;
`

const Interactive = ({ component, scope }) => {
  return (
    <LiveProvider code={component} scope={scope}>
      <LivePreview />
      <Editor />
      <LiveError />
      <PropsTable of={PropDesc(getSystemPropDesc(Box))} />
    </LiveProvider>
  )
}

export default Interactive
