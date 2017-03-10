import React from 'react'
import { mount } from 'enzyme'

import { Input, Label, Checkbox } from '../../../src'

describe('Checkbox', () => {
  let component

  beforeEach(() => {
    component = mount(
      <Checkbox className="checkbox" />,
    )
  })

  it('should render checkbox', () => {
    expect(component).not.toBeNull()
    expect(component.find(Label)).toHaveLength(1)
    expect(component.find(Input)).toHaveLength(1)
    expect(component.find(Input).text()).toBe('')
  })

  it('should render unchecked checkbox', () => {
    expect(component.find(Input).props()).toHaveProperty('checked', undefined)
  })

  it('should render checked checkbox', () => {
    component = mount(
      <Checkbox className="checkbox" checked />,
    )
    expect(component.find(Input).props()).toHaveProperty('checked', true)
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
