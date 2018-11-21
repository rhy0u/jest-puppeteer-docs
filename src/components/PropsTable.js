import * as React from 'react'
import { withMDXComponents } from '@mdx-js/tag/dist/mdx-provider'
import { get } from 'lodash'

export const getPropType = (prop, Tooltip) => {
  const propName = prop.flowType ? prop.flowType.name : prop.type.name
  const isEnum = propName.startsWith('"') || propName === 'enum'
  const name = isEnum ? 'enum' : propName
  const value = prop.type && prop.type.value

  if (!name) return null

  if (
    !Tooltip ||
    (isEnum && typeof value === 'string') ||
    (!prop.flowType && !isEnum && !value) ||
    (prop.flowType && !prop.flowType.elements)
  ) {
    return name
  }

  return prop.flowType ? (
    <Tooltip text={prop.flowType}>{name}</Tooltip>
  ) : (
    <Tooltip text={prop.type}>{name}</Tooltip>
  )
}

const BasePropsTable = ({ of: component, components }) => {
  const { __docgenInfo: info } = component
  const props = info && info.props

  if (!info || !props) {
    return null
  }

  const hasDescription = Object.keys(props).some(name => {
    const description = get(`${name}.description`, props)
    return Boolean(description) && Boolean(get('length', description))
  })

  const Table = components.table || 'table'
  const Thead = components.thead || 'thead'
  const Tr = components.tr || 'tr'
  const Th = components.th || 'th'
  const Tbody = components.tbody || 'tbody'
  const Td = components.td || 'td'
  const Tooltip = components.tooltip

  return (
    <>
      <Table
        className="PropsTable"
        style={{ display: 'table', borderRadius: 3 }}
      >
        <Thead>
          <Tr>
            <Th className="PropsTable--property">Property</Th>
            <Th className="PropsTable--type">Type</Th>
            <Th className="PropsTable--required">Required</Th>
            <Th className="PropsTable--default">Default</Th>
            {hasDescription && (
              <Th width="40%" className="PropsTable--description">
                Description
              </Th>
            )}
          </Tr>
        </Thead>
        <Tbody>
          {props &&
            Object.keys(props).map(name => {
              const prop = props[name]

              if (!prop.flowType && !prop.type) return null
              return (
                <Tr key={name}>
                  <Td>{name}</Td>
                  <Td>{getPropType(prop, Tooltip)}</Td>
                  <Td>{String(prop.required)}</Td>
                  {!prop.defaultValue ? (
                    <Td />
                  ) : (
                    <Td>
                      {prop.defaultValue.value === "''" ? (
                        <em>[Empty String]</em>
                      ) : (
                        prop.defaultValue &&
                        prop.defaultValue.value.replace(/'/g, '')
                      )}
                    </Td>
                  )}
                  {hasDescription && (
                    <Td>{prop.description && prop.description}</Td>
                  )}
                </Tr>
              )
            })}
        </Tbody>
      </Table>
    </>
  )
}

export const PropsTable = withMDXComponents(BasePropsTable)
