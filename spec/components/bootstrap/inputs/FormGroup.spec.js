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
    expect(component.hasClass('has-danger')).toBeFalsy()
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

  describe('validation', () => {
    it('should render has-danger css class', () => {
      component.setProps({
        hasDanger: true,
      })

      expect(component.hasClass('has-danger')).toBeTruthy()
    })

    it('should render has-error css class', () => {
      component.setProps({
        hasError: true,
      })

      expect(component.hasClass('has-error')).toBeTruthy()
    })

    it('should render has-success css class', () => {
      component.setProps({
        hasSuccess: true,
      })

      expect(component.hasClass('has-success')).toBeTruthy()
    })

    it('should render has-warning css class', () => {
      component.setProps({
        hasWarning: true,
      })

      expect(component.hasClass('has-warning')).toBeTruthy()
    })
  })
})
