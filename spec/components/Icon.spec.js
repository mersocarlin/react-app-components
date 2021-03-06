import React from 'react'
import { mount } from 'enzyme'

import { Icon } from '../../src'

describe('Icon', () => {
  let component 

  beforeEach(() => {
    component = mount(<Icon icon="code" />)
  })

  it('should render fa-code icon', () => {
    expect(component).not.toBeNull()

    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code')
  })

  it('should render fa-code fa-fw icon', () => {
    component.setProps({
      fw: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-fw')
  })

  it('should render fa-code fa-lg icon', () => {
    component.setProps({
      lg: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-lg')
  })

  it('should render fa-code fa-2x icon', () => {
    component.setProps({
      x2: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-2x')
  })

  it('should render fa-code fa-3x icon', () => {
    component.setProps({
      x3: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-3x')
  })

  it('should render fa-code fa-4x icon', () => {
    component.setProps({
      x4: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-4x')
  })

  it('should render fa-code fa-5x icon', () => {
    component.setProps({
      x5: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-5x')
  })

  it('should render first size found if more than one is sent as prop', () => {
    component.setProps({
      x2: true,
      x5: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-2x')
  })

  it('should render fa-code fa-fw fa-lg icon', () => {
    component.setProps({
      fw: true,
      lg: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-fw fa-lg')
  })

  it('should render fa-code fa-fw fa-2x icon', () => {
    component.setProps({
      fw: true,
      x2: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-fw fa-2x')
  })

  it('should render fa-code fa-fw fa-3x icon', () => {
    component.setProps({
      fw: true,
      x3: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-fw fa-3x')
  })

  it('should render fa-code fa-fw fa-4x icon', () => {
    component.setProps({
      fw: true,
      x4: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-fw fa-4x')
  })

  it('should render fa-code fa-fw fa-5x icon', () => {
    component.setProps({
      fw: true,
      x5: true,
    })
    const props = component.find('i').props()

    expect(props.className.trim()).toBe('fa fa-code fa-fw fa-5x')
  })

  it('should skip if onClick is not defined', () => {
    component.setProps({
      value: '123',
    })

    component.find('i').simulate('click')
  })

  it('should handle onClick', () => {
    const handleClick = jest.fn()

    component.setProps({
      onClick: handleClick,
    })

    expect(handleClick).not.toHaveBeenCalled()
    component.find('i').simulate('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
