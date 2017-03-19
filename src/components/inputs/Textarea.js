import React from 'react'

const Textarea = ({ onChange, ...rest }) => (
  <textarea
    onChange={ev => onChange && onChange(ev.target.value, ev)}
    {...rest}
  />
)

export default Textarea
