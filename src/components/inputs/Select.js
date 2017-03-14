import React from 'react'
import { compose, withProps, withHandlers } from 'recompose'
import ReactSelect from 'react-select'
import _ from 'lodash'

import 'react-select/dist/react-select.css'

const Select = ({ ...rest }) => (
  <ReactSelect
    labelKey="text"
    valueKey="id"
    {...rest}
  />
)

export default compose(
  withProps(({ clearable = false, loading = false, options = [] }) => ({
    clearable,
    isLoading: loading,
    options,
  })),
  withHandlers({
    onChange: ({ value, onChange }) => (newValue) => {
      if (!onChange) {
        return
      }

      if (!newValue) {
        onChange(null)
        return
      }

      const newValueId = (
        _.isArray(newValue) ?
          newValue.map(v => v.id) :
          newValue.id
      )

      if (_.isEqual(value, newValueId)) {
        return
      }

      onChange(newValueId)
    },
    onInputChange: ({ onInputChange }) => (text) => {
      if (!onInputChange) {
        return
      }

      onInputChange(text)
    },
  }),
)(Select)
