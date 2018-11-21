import React from 'react'
import { styled, up, css } from '@smooth-ui/core-sc'
import { LocalForm } from 'react-redux-form'
import SettingsFieldBoolean from './SettingsFieldBoolean'
import SettingsGroup from './SettingsGroup'
import SettingsFieldString from './SettingsFieldString'
import SettingsFieldEnum from './SettingsFieldEnum'
import SettingsFieldInteger from './SettingsFieldInteger'

const SettingsContainer = styled.div`
  width: 100%;
  font-size: 14px;
  background-color: #22252b;
  color: #9ea5b3;
  user-select: none;
  overflow: auto;
  max-height: 50%;
  ${up(
    'md',
    css`
      width: 200px;
      height: 100%;
    `
  )}
`

const getGroupSettings = (group, settings) =>
  settings.filter(setting => setting.group === group)

const settingComponents = {
  boolean: SettingsFieldBoolean,
  string: SettingsFieldString,
  enum: SettingsFieldEnum,
  integer: SettingsFieldInteger,
}

const renderSetting = setting => {
  const SettingComponent = settingComponents[setting.type]
  if (!SettingComponent) throw new Error(`Unknown setting type ${setting.type}`)
  return <SettingComponent key={setting.name} setting={setting} />
}

const Form = styled(LocalForm)`
  display: flex;
  flex-direction: column;
  ${up('md', 'display: block;')}
`

const Settings = ({ settings, initialState, onChange }) => (
  <SettingsContainer direction="column">
    <Form onChange={onChange} initialState={initialState}>
      <SettingsGroup title="Global">
        {getGroupSettings('global', settings).map(renderSetting)}
      </SettingsGroup>
      <SettingsGroup title="SVGO">
        {getGroupSettings('svgo', settings).map(renderSetting)}
      </SettingsGroup>
      <SettingsGroup title="Prettier">
        {getGroupSettings('prettier', settings).map(renderSetting)}
      </SettingsGroup>
    </Form>
  </SettingsContainer>
)

export default Settings
