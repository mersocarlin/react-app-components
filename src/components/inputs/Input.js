import React, { PropTypes } from 'react'
import { compose, withHandlers } from 'recompose'

const Input = ({ onChange, type, ...rest }) => (
  <input
    onChange={onChange}
    type={type}
    {...rest}
  />
)

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['number', 'password', 'text', 'url']),
}

export default compose(
  withHandlers({
    onChange: ({ onChange }) => (ev) => {
      if (!onChange) {
        return
      }

      onChange(ev.target.value, ev)
    },
  }),
)(Input)
