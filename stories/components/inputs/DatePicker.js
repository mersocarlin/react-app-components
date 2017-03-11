import React from 'react'
import { compose, withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'

import { DatePicker } from '../../../src'

const DatePickerWithState = compose(
  withState('value', 'setValue', props => props.value),
)(
  ({ value, setValue, ...props }) => (
    <DatePicker
      {...props}
      className="datepicker"
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  )
)

export default () => {
  storiesOf('DatePicker', module)
    .add('Default', () => (
      <DatePickerWithState value="01/01/2017" />
    ))
    .add('Disabled', () => (
      <DatePickerWithState value="01/02/2017" disabled />
    ))
    .add('MM/DD/YYYY format', () => (
      <DatePickerWithState value="03/01/2017" format="MM/DD/YYYY" />
    ))
}
