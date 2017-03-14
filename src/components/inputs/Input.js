import React, { PropTypes } from 'react'

const Input = ({ onChange, type, ...rest }) => (
  <input
    onChange={ev => onChange && onChange(ev.target.value, ev)}
    type={type}
    {...rest}
  />
)

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['checkbox', 'number', 'password', 'radio', 'text', 'url']),
}

export default Input
