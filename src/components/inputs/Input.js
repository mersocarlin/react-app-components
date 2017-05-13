import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ onChange, ...rest }) => (
  <input
    onChange={event => onChange && onChange(event.target.value, event)}
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
