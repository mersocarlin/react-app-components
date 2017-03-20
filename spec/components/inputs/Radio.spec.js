import React from 'react'
import { mount } from 'enzyme'

import { Input, Label, Radio } from '../../../src'

describe('Radio', () => {
  let component

  beforeEach(() => {
    component = mount(
      <Radio className="radio" />,
    )
  })

  it('should render radio', () => {
    expect(component).not.toBeNull()
    expect(component.find(Label)).toHaveLength(1)
    expect(component.find(Input)).toHaveLength(1)
    expect(component.find(Input).text()).toBe('')
  })

  it('should render unchecked radio', () => {
    expect(component.find(Input).props()).toHaveProperty('checked', undefined)
  })

  it('should render checked radio', () => {
    component = mount(
      <Radio className="radio" checked />,
    )
    expect(component.find(Input).props()).toHaveProperty('checked', true)
  })

  it('should skip if onClick is not defined', () => {
    component.setProps({
      value: '123',
    })

    component.simulate('click')
  })

  it('should handle onClick', () => {
    const handleClick = jest.fn()

    component.setProps({
      onClick: handleClick,
      value: '123',
    })

    expect(handleClick).not.toHaveBeenCalled()
    component.simulate('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick.mock.calls[0][0]).toBe('123')
  })
})
