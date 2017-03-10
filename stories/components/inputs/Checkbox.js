import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Checkbox } from '../../../src'

export default () => {
  storiesOf('Checkbox', module)
    .add('Default', () => (
      <Checkbox className="checkbox" />
    ))
    .add('With text', () => (
      <Checkbox className="checkbox">
        Option 1
      </Checkbox>
    ))
}
