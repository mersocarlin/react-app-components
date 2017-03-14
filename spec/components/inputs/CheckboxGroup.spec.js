import React from 'react'
import { mount } from 'enzyme'

import { Checkbox, CheckboxGroup } from '../../../src'

describe('CheckboxGroup', () => {
  let component

  beforeEach(() => {
    component = mount(
      <CheckboxGroup
        items={[{
          id: 1,
          text: 'Option 1',
        }, {
          id: 2,
          text: 'Option 2',
        }, {
          id: 3,
          text: 'Option 3',
        }]}
        value={[]}
      />,
    )
  })

  it('should render 3 <Checkbox /> components', () => {
    expect(component).not.toBeNull()
    expect(component.find(Checkbox)).toHaveLength(3)
    expect(component.find(Checkbox).at(0).props()).toHaveProperty('checked', false)
    expect(component.find(Checkbox).at(1).props()).toHaveProperty('checked', false)
    expect(component.find(Checkbox).at(2).props()).toHaveProperty('checked', false)

    expect(component.find(Checkbox).at(0).props()).toHaveProperty('value', 1)
    expect(component.find(Checkbox).at(1).props()).toHaveProperty('value', 2)
    expect(component.find(Checkbox).at(2).props()).toHaveProperty('value', 3)
  })

  it('should set second and third <Checkbox /> as checked', () => {
    component.setProps({
      value: [2,3],
    })

    expect(component.find(Checkbox).at(0).props()).toHaveProperty('checked', false)
    expect(component.find(Checkbox).at(1).props()).toHaveProperty('checked', true)
    expect(component.find(Checkbox).at(2).props()).toHaveProperty('checked', true)
  })

  it('should handle onChange', () => {
    const handleChange = jest.fn()

    component.setProps({
      onChange: handleChange,
    })

    expect(handleChange).not.toHaveBeenCalled()
    component.find(Checkbox).at(2).simulate('click')
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith([3])
  })

  it('should deselect checked value', () => {
    const handleChange = jest.fn()

    component.setProps({
      onChange: handleChange,
      value: [1],
    })

    component.find(Checkbox).at(0).simulate('click')
    expect(handleChange).toHaveBeenCalledWith([])
  })
})
