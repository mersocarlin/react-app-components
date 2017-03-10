import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Icon } from '../../src'

export default () => {
  storiesOf('Icon', module)
    .add('Default', () => (
      <div>
        <Icon icon="code" />
        <Icon icon="code" fw />
        <Icon icon="code" lg />
        <Icon icon="code" x2 />
        <Icon icon="code" x3 />
        <Icon icon="code" x4 />
        <Icon icon="code" x5 />
      </div>
    ))
}
