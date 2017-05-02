import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ onChange, type, ...rest }) => (
  <input
    onChange={ev => onChange && onChange(ev.target.value, ev)}
    type={type}
    {...rest}
  />
)

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    'checkbox', 'email', 'number',
    'password', 'radio', 'text', 'url',
  ]),
}

export default Input
