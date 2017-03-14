import React from 'react'
import { compose, withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'

import { CheckboxGroup } from '../../../src'

const CheckboxGroupWithState = compose(
  withState('value', 'setValue', props => props.value),
)(
  ({ value, setValue }) => (
    <CheckboxGroup
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
      onChange={newValue => setValue(newValue)}
      value={value}
    />
  ),
)

export default () => {
  storiesOf('Checkbox Group', module)
    .add('Default', () => (
      <CheckboxGroupWithState value={[1]} />
    ))
}
