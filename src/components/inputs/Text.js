import React from 'react'
import PropTypes from 'prop-types'
import { compose, mapProps, withHandlers } from 'recompose'
import { omit, toLower, toUpper } from 'lodash'

import Input from './Input'

const Text = ({ type = 'text', ...rest }) => (
  <Input
    type={type}
    {...omit(rest, ['lowercase', 'uppercase'])}
  />
)

Text.propTypes = {
  lowercase: PropTypes.bool,
  type: PropTypes.oneOf(['email', 'password', 'text', 'url']),
  uppercase: PropTypes.bool,
}

const parseValue = (lowercase, uppercase, value) => (
  (lowercase && toLower(value)) ||
  (uppercase && toUpper(value)) ||
  value
)

export default compose(
  mapProps(({ lowercase, uppercase, value, ...rest }) => ({
    lowercase,
    uppercase,
    value: parseValue(lowercase, uppercase, value),
    ...rest,
  })),
  withHandlers({
    onChange: ({ lowercase, onChange, uppercase }) => (value, event) => {
      onChange(
        parseValue(lowercase, uppercase, value),
        event,
      )
    },
  }),
)(Text)
