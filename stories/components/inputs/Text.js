import React from 'react'
import { compose, withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'
import { boolean } from '@kadira/storybook-addon-knobs'

import { Text } from '../../../src'

export const TextWithState = compose(
  withState('value', 'setValue', props => props.value),
)(
  ({ value, setValue, ...props }) => (
    <Text
      {...props}
      value={value}
      onChange={newValue => setValue(newValue)}
    />
  ),
)

export default () => {
  storiesOf('Text', module)
    .add('Default', () => (
      <TextWithState
        className="form-control"
        lowercase={boolean('lowercase')}
        uppercase={boolean('uppercase')}
        value="Testing"
      />
    ))
    .add('Email', () => (
      <TextWithState
        className="form-control"
        value="me@me.com"
        type="email"
      />
    ))
    .add('Password', () => (
      <TextWithState
        className="form-control"
        value="1234567890"
        type="password"
      />
    ))
    .add('Url', () => (
      <TextWithState
        className="form-control"
        value="www.example.com"
        type="url"
      />
    ))
}
