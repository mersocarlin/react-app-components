import React from 'react'
import { compose, withHandlers } from 'recompose'

import Input from './Input'
import Label from '../Label'

const Radio = ({ checked, children, name = 'radio', ...rest }) => (
  <div {...rest}>
    <Input
      checked={checked}
      name={name}
      type="radio"
    />
    { children && (
      <Label>{children}</Label>
    ) }
  </div>
)

export default compose(
  withHandlers({
    onClick: ({ id, onClick }) => (ev) => {
      if (!onClick) {
        return
      }

      onClick(id, ev)
    },
  }),
)(Radio)
