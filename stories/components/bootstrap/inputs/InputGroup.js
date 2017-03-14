import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Icon, InputGroup } from '../../../../src'
import { TextWithState } from '../../inputs/Text'

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
