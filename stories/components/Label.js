import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Label } from '../../src'

export default () => {
  storiesOf('Label', module)
    .add('Default', () => (
      <Label>
        I am a label
      </Label>
    ))
}
