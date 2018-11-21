import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { styled } from '@smooth-ui/core-sc'

const Editor = styled(LiveEditor)`
  overflow: scroll;
  padding: 10px;
  border-radius: 3px;
  max-height: 400px;
  margin: 25px -20px !important;
`

const Interactive = ({ component, scope }) => (
  <LiveProvider code={component} scope={scope}>
    <LivePreview />
    <Editor />
    <LiveError />
  </LiveProvider>
)

export default Interactive
