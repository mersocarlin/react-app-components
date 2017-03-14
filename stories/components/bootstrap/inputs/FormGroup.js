import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { FormGroup, Icon, InputGroup, Label } from '../../../../src'
import { DatePickerWithState } from '../../inputs/DatePicker'
import { SelectWithState } from '../../inputs/Select'
import { TextWithState } from '../../inputs/Text'

export default () => {
  storiesOf('Bootstrap > FormGroup', module)
    .add('Default', () => (
      <FormGroup
        label={<Label>Name</Label>}
        input={
          <TextWithState
            className="form-control"
            placeholder="Enter your name"
            value=""
          />
        }
      />
    ))
    .add('with DatePicker', () => (
      <FormGroup
        label={<Label>Name</Label>}
        input={<DatePickerWithState value="01/01/2017" />}
      />
    ))
    .add('with InputGroup', () => (
      <FormGroup
        label={<Label>Name</Label>}
        input={
          <InputGroup
            leftAddon={<Icon icon="code" />}
          >
            <TextWithState
              className="form-control"
              value=""
            />
          </InputGroup>
        }
      />
    ))
    .add('with Select', () => (
      <FormGroup
        label={<Label>Name</Label>}
        input={<SelectWithState value={1} />}
      />
    ))
}
