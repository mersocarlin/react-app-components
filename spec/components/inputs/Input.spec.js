import React from 'react'
import { shallow } from 'enzyme'

import { Input } from '../../../src'

describe('Input', () => {
  const wrapper = (props = {}) => (
    shallow(<Input {...props} />)
  )

  it('should render default Input component', () => {
    const component = wrapper({ type: 'text' })

    expect(component).not.toBeNull()
    expect(component.html()).toBe('<input type="text"/>')
  })

  it('should render an input with given props', () => {
    const component = wrapper({
      className: 'form-control',
      disabled: true,
      placeholder: 'Name',
    })

    const props = component.props()

    expect(props).toHaveProperty('className', 'form-control')
    expect(props).toHaveProperty('placeholder', 'Name')
    expect(props).toHaveProperty('disabled', true)
  })

  it('should handle onChange event', () => {
    const handleChange = jest.fn()
    const component = wrapper({ onChange: handleChange })

    expect(handleChange).not.toHaveBeenCalled()
    component.simulate('change', { target: { value: '123' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('should handle onKeyUp event', () => {
    const handleKeyUp = jest.fn()
    const component = wrapper({ onKeyUp: handleKeyUp })

    expect(handleKeyUp).not.toHaveBeenCalled()
    component.simulate('keyUp', { keyCode: 13 })
    expect(handleKeyUp).toHaveBeenCalledTimes(1)
  })
})
