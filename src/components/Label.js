import React from 'react'

const Label = ({ children, ...rest }) => (
  <label {...rest}>
    {children}
  </label>
)

export default Label
