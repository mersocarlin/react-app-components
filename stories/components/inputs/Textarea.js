import React from 'react'
import { compose, withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'

import { Textarea } from '../../../src'

export const TextareaWithState = compose(
  withState('value', 'setValue', props => props.value),
)(
  ({ value, setValue, ...props }) => (
    <Textarea
      {...props}
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  ),
)

export default () => {
  storiesOf('Textarea', module)
    .add('Default', () => (
      <TextareaWithState
        value="Testing"
      />
    ))
}
