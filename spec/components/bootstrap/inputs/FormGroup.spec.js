import React from 'react'
import { mount } from 'enzyme'

import { Label, FormGroup, Text } from '../../../../src'

describe('FormGroup', () => {
  let component 

  beforeEach(() => {
    component = mount(
      <FormGroup
        label={<Label>Name:</Label>}
        input={<Text value="react-app-components" />}
      />,
    )
  })

  it('should render FormGroup with Label and Text component', () => {
    expect(component).not.toBeNull()

    expect(component.find(Label)).toHaveLength(1)
    expect(component.find(Text)).toHaveLength(1)
  })

  it('should render FormGroup without label', () => {
    component.setProps({
      label: null,
    })

    expect(component.find(Label)).toHaveLength(0)
  })

  it('should render FormGroup without input', () => {
    component.setProps({
      input: null,
    })

    expect(component.find(Text)).toHaveLength(0)
  })
})
