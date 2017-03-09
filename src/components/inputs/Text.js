import React, { PropTypes } from 'react'

import Input from './Input'

const Text = ({ type = 'text', ...rest }) => (
  <Input
    type={type}
    {...rest}
  />
)

Text.propTypes = {
  type: PropTypes.oneOf(['password', 'text', 'url']),
}

export default Text