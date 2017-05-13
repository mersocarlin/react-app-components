import React from 'react'
import { mount } from 'enzyme'

import { Input, Text } from '../../../src'

describe('Text', () => {
  let component

  beforeEach(() => {
    component = mount(<Text />)
  })

  it('should render default Text component', () => {
    expect(component).not.toBeNull()

    const props = component.find(Input).props()

    expect(props).toHaveProperty('type', 'text')
  })

  it('should render input type email', () => {
    component.setProps({
      type: 'email',
    })

    const props = component.props()

    expect(props).toHaveProperty('type', 'email')
  })

  it('should render input type password', () => {
    component.setProps({
      type: 'password',
    })

    const props = component.props()

    expect(props).toHaveProperty('type', 'password')
  })

  it('should render input type url', () => {
    component.setProps({
      type: 'url',
    })

    const props = component.props()

    expect(props).toHaveProperty('type', 'url')
  })

  it('should handle uppercase text', () => {
    const handleChange = jest.fn()

    component.setProps({
      onChange: handleChange,
      uppercase: true,
    })

    const event = { target: { value: 'uppercase text' } }
    component.simulate('change', event)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange.mock.calls[0][0]).toBe('UPPERCASE TEXT')
  })

  it('should handle lowercase text', () => {
    const handleChange = jest.fn()

    component.setProps({
      onChange: handleChange,
      lowercase: true,
    })

    const event = { target: { value: 'LOWERCASE TEXT' } }
    component.simulate('change', event)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange.mock.calls[0][0]).toBe('lowercase text')
  })
})
