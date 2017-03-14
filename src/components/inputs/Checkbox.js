import React from 'react'
import { compose, withHandlers } from 'recompose'

import Input from './Input'
import Label from '../Label'

const Checkbox = ({ checked, children, value, ...rest }) => (
  <div {...rest}>
    <Label>
      <Input
        checked={checked}
        type="checkbox"
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
)(Checkbox)
