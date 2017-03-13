import React from 'react'
import { compose, withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'

import { Icon, InputGroup, Text } from '../../../../src'

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
    .add('Left addon', () => (
      <InputGroup
        leftAddon={<Icon icon="code" />}
      >
        <TextWithState
          className="form-control"
          value="Testing"
        />
      </InputGroup>
    ))
    .add('Right addon', () => (
      <InputGroup
        rightAddon={<Icon icon="code" />}
      >
        <TextWithState
          className="form-control"
          value="Testing"
        />
      </InputGroup>
    ))
    .add('Left & Right addons', () => (
      <InputGroup
        leftAddon={<Icon icon="code" />}
        rightAddon={<Icon icon="times" />}
      >
        <TextWithState
          className="form-control"
          value="Testing"
        />
      </InputGroup>
    ))
    .add('Left multi addon', () => (
      <InputGroup
        leftAddon={[
          <Icon icon="user" />,
          <Icon icon="code" />,
        ]}
      >
        <TextWithState
          className="form-control"
          value="Testing"
        />
      </InputGroup>
    ))
    .add('Right multi addon', () => (
      <InputGroup
        rightAddon={[
          <Icon icon="user" />,
          <Icon icon="code" />,
        ]}
      >
        <TextWithState
          className="form-control"
          value="Testing"
        />
      </InputGroup>
    ))
}
