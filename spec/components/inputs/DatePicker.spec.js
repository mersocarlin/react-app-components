import React from 'react'
import { mount } from 'enzyme'
import ReactDatePicker from 'react-datepicker'

import { DatePicker } from '../../../src'

describe('DatePicker', () => {
  let component

  beforeEach(() => {
    component = mount(
      <DatePicker className="datepicker" />,
    )
  })

  it('should render datepicker with default props', () => {
    expect(component).not.toBeNull()

    const componentProps = component.find(ReactDatePicker).props()
    expect(componentProps).toHaveProperty('className', 'datepicker')
    expect(componentProps).toHaveProperty('dateFormat', 'DD/MM/YYYY')
    expect(componentProps).toHaveProperty('selected', '')
  })

  it('shoud render datepicker with given props', () => {
    const value = '06/20/2000'
    const format = 'MM/DD/YYYY'

    component.setProps({
      disabled: true,
      format,
      placeholder: 'Select the date',
      value,
    })

    const componentProps = component.find(ReactDatePicker).props()

    expect(componentProps).toHaveProperty('disabled', true)
    expect(componentProps).toHaveProperty('dateFormat', format)
    expect(componentProps).toHaveProperty('placeholder', 'Select the date')
    expect(componentProps.selected.format(format)).toBe(value)
  })

  it('it should handle onChange', () => {
    const handleChange = jest.fn()

    component.setProps({
      onChange: handleChange,
      value: '01/01/2001',
    })

    const expectedValue = '01/01/2017'

    component
      .find(ReactDatePicker)
      .find('input')
      .simulate('change', {
        target: {
          value: expectedValue,
        },
      })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(expectedValue)
  })
})
