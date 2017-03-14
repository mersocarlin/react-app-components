import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Radio } from '../../../src'

export default () => {
  storiesOf('Radio', module)
    .add('Default', () => (
      <Radio className="radio" />
    ))
    .add('With text', () => (
      <Radio className="radio">
        Option 1
      </Radio>
    ))
}
