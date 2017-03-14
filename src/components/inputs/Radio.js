import React from 'react'
import { compose, withHandlers } from 'recompose'

import Input from './Input'
import Label from '../Label'

const Radio = ({ checked, children, name = 'radio', value, ...rest }) => (
  <div {...rest}>
    <Label>
      <Input
        checked={checked}
        name={name}
        type="radio"
        value={value}
      />
      { children }
    </Label>
  </div>
)

export default compose(
  withHandlers({
    onClick: ({ value, onClick }) => (ev) => {
      if (!onClick) {
        return
      }

      onClick(value, ev)
    },
  }),
)(Radio)
