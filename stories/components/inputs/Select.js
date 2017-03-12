import React from 'react'
import { compose, withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'

import { Select } from '../../../src'

const SelectWithState = compose(
  withState('value', 'setValue', props => props.value),
)(
  ({ value, setValue, ...rest }) => (
    <Select
      className="select"
      value={value}
      onChange={newValue => setValue(newValue)}
      options={[{
        id: 1,
        text: 'Dog',
      }, {
        id: 2,
        text: 'Cat',
      }, {
        id: 3,
        text: 'Bear',
      }, {
        id: 4,
        text: 'Tiger',
      }, {
        id: 5,
        text: 'Lion',
      }]}
      {...rest}
    />
  ),
)

export default () => {
  storiesOf('Select', module)
    .add('Default', () => (
      <SelectWithState value={1} />
    ))
    .add('Disabled', () => (
      <SelectWithState value={1} disabled />
    ))
    .add('Multi', () => (
      <SelectWithState value={1} multi />
    ))
}
