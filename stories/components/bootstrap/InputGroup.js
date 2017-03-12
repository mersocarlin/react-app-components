import React from 'react'
import { compose, withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'

import { InputGroup, Text } from '../../../src'

const TextWithState = compose(
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
  storiesOf('Bootstrap > InputGroup', module)
    .add('Default', () => (
      <InputGroup>
        <TextWithState
          className="form-control"
          value="Testing"
        />
      </InputGroup>
    ))
    .add('Left string addon', () => (
      <InputGroup leftAddon="@">
        <TextWithState
          className="form-control"
          value="Testing"
        />
      </InputGroup>
    ))
    .add('Right string addon', () => (
      <InputGroup rightAddon="@">
        <TextWithState
          className="form-control"
          value="Testing"
        />
      </InputGroup>
    ))
    .add('Left & Right string addons', () => (
      <InputGroup leftAddon="@" rightAddon="@">
        <TextWithState
          className="form-control"
          value="Testing"
        />
      </InputGroup>
    ))
    .add('Left multi addon', () => (
      <InputGroup leftAddon={['@', 'www.example.com']}>
        <TextWithState
          className="form-control"
          value="Testing"
        />
      </InputGroup>
    ))
    .add('Right multi addon', () => (
      <InputGroup rightAddon={['@', 'www.example.com']}>
        <TextWithState
          className="form-control"
          value="Testing"
        />
      </InputGroup>
    ))
}
