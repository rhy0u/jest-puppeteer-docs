import React from 'react'
import { Field } from 'react-final-form'
import { Checkbox } from '@smooth-ui/core-sc'

const CheckboxControl = props => (
  <Field
    type="checkbox"
    render={({ input, ...props }) => <Checkbox {...input} {...props} />}
    {...props}
  />
)

export default CheckboxControl
