import React from 'react'
import { compose, withHandlers, withProps } from 'recompose'
import moment from 'moment'
import ReactDatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DatePicker = ({ ...props }) => (
  <ReactDatePicker {...props} />
)

export default compose(
  withProps(({ format = 'DD/MM/YYYY', value }) => ({
    dateFormat: format,
    selected: (value && moment.utc(value, format)) || '',
  })),
  withHandlers({
    onChange: ({ dateFormat, onChange }) => (newValue) => {
      if (!onChange) {
        return
      }

      if (newValue) {
        onChange(newValue.format(dateFormat))
      } else {
        onChange('')
      }
    },
  }),
)(DatePicker)
