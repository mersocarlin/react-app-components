import React from 'react'
import { mount } from 'enzyme'
import ReactSelect from 'react-select'

import { Select } from '../../../src'

describe('Select', () => {
  let component
  let options

  beforeEach(() => {
    options = [{
      id: 1,
      text: 'Option 1',
    }, {
      id: 2,
      text: 'Option 2',
    }, {
      id: 3,
      text: 'Option 3',
    }]
    component = mount(
      <Select
        className="select"
        options={options}
      />,
    )
  })

  it('should render default Select component with 3 options', () => {
    expect(component).not.toBeNull()

    const componentProps = component.find(ReactSelect).props()

    expect(componentProps).toHaveProperty('className', 'select')
    expect(componentProps).toHaveProperty('clearable', false)
    expect(componentProps).toHaveProperty('labelKey', 'text')
    expect(componentProps).toHaveProperty('multi', false)
    expect(componentProps).toHaveProperty('options', options)
    expect(componentProps).toHaveProperty('valueKey', 'id')
  })

  it('should render Select with given props', () => {
    component.setProps({
      clearable: true,
      multi: true,
      options: [],
      placeholder: 'Type to search',
      value: [1, 2],
    })

    const componentProps = component.find(ReactSelect).props()
    expect(componentProps).toHaveProperty('clearable', true)
    expect(componentProps).toHaveProperty('multi', true)
    expect(componentProps).toHaveProperty('options', [])
    expect(componentProps).toHaveProperty('placeholder', 'Type to search')
    expect(componentProps).toHaveProperty('value', [1, 2])
  })

  it('should handle onChange', () => {
    const handleChange = jest.fn()

    component.setProps({
      onChange: handleChange,
      value: '1',
    })

    expect(handleChange).not.toHaveBeenCalled()

    component.find(ReactSelect).find('input').simulate('change', { target: { value: 'Option 2' } })
    component.find(ReactSelect).find('input').simulate('keyDown', { keyCode: 13, key: 'Enter' })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(2)
  })

  it('should handle onInputChange', () => {
    const handleInputChange = jest.fn()

    component.setProps({
      onInputChange: handleInputChange,
      value: '1',
    })

    expect(handleInputChange).not.toHaveBeenCalled()

    component.find(ReactSelect).find('input').simulate('change', { target: { value: 'Option' } })
    expect(handleInputChange).toHaveBeenCalledTimes(1)
    expect(handleInputChange).toHaveBeenCalledWith('Option')
  })
})
