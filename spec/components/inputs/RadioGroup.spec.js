import React from 'react'
import { mount } from 'enzyme'

import { Radio, RadioGroup } from '../../../src'

describe('Radio', () => {
  let component

  beforeEach(() => {
    component = mount(
      <RadioGroup
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
        name="radio-group"
      />,
    )
  })

  it('should render 3 <Radio /> components', () => {
    expect(component).not.toBeNull()
    expect(component.find(Radio)).toHaveLength(3)
    expect(component.find(Radio).at(0).props()).toHaveProperty('checked', false)
    expect(component.find(Radio).at(1).props()).toHaveProperty('checked', false)
    expect(component.find(Radio).at(2).props()).toHaveProperty('checked', false)

    expect(component.find(Radio).at(0).props()).toHaveProperty('name', 'radio-group')
    expect(component.find(Radio).at(1).props()).toHaveProperty('name', 'radio-group')
    expect(component.find(Radio).at(2).props()).toHaveProperty('name', 'radio-group')
  })

  it('should set second <Radio /> as checked', () => {
    component.setProps({
      value: 2,
    })

    expect(component.find(Radio)).toHaveLength(3)
    expect(component.find(Radio).at(0).props()).toHaveProperty('checked', false)
    expect(component.find(Radio).at(1).props()).toHaveProperty('checked', true)
    expect(component.find(Radio).at(2).props()).toHaveProperty('checked', false)
  })

  it('should handle onChange', () => {
    const handleChange = jest.fn()

    component.setProps({
      onChange: handleChange,
    })

    expect(handleChange).not.toHaveBeenCalled()
    component.find(Radio).at(2).simulate('click')
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(3)
  })

  it('should not notify change if the same value is clicked', () => {
    const handleChange = jest.fn()

    component.setProps({
      onChange: handleChange,
      value: 1,
    })

    component.find(Radio).at(0).simulate('click')
    expect(handleChange).toHaveBeenCalledTimes(0)
  })
})
