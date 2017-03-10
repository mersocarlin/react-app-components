import React from 'react'
import { compose, withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'

import { RadioGroup } from '../../../src'

const RadioGroupWithState = compose(
  withState('value', 'setValue', props => props.value),
)(
  ({ value, setValue }) => (
    <RadioGroup
      items={[{
        id: 1,
        text: 'Option 1',
      }, {
        id: 2,
        text: 'Option 2',
      }, {
        id: 3,
        text: 'Option 3',
      }]}
      name="radio-group"
      onChange={newValue => setValue(newValue)}
      value={value}
    />
  ),
)

export default () => {
  storiesOf('Radio Group', module)
    .add('Default', () => (
      <RadioGroupWithState value={1} />
    ))
}
