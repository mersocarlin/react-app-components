import React from 'react'
import { mount } from 'enzyme'

import { Button } from '../../../src'

describe('Button', () => {
  let component 

  beforeEach(() => {
    component = mount(<Button>Click-me!</Button>)
  })

  it('should accept custom className prop', () => {
    component.setProps({
      className: 'customButtonClass',
    })

    expect(component.find('a').props()).toHaveProperty('className', 'btn customButtonClass')
  })

  it('should render default with <a> tag', () => {
    expect(component).not.toBeNull()
    expect(component.find('a')).toHaveLength(1)
  })

  it('should render as <a> tag', () => {
    component.setProps({
      aTag: true,
    })

    expect(component.find('a')).toHaveLength(1)
    expect(component.find('button')).toHaveLength(0)
  })

  it('should render as <button> tag', () => {
    component.setProps({
      asButton: true,
    })

    expect(component.find('a')).toHaveLength(0)
    expect(component.find('button')).toHaveLength(1)
  })

  it('should render Primary Button', () => {
    component.setProps({
      primary: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-primary')
  })

  it('should render Primary button with extra className prop', () => {
    component.setProps({
      className: 'customButtonClass',
      primary: true,
    })

    expect(component.find('a').props()).toHaveProperty('className', 'btn btn-primary customButtonClass')
  })

  it('should render Primary if more than one type os specified', () => {
    component.setProps({
      primary: true,
      secondary: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-primary')
  })

  it('should render Secondary Button', () => {
    component.setProps({
      secondary: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-secondary')
  })

  it('should render Success Button', () => {
    component.setProps({
      success: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-success')
  })

  it('should render Info Button', () => {
    component.setProps({
      info: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-info')
  })

  it('should render Warning Button', () => {
    component.setProps({
      warning: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-warning')
  })

  it('should render Danger Button', () => {
    component.setProps({
      danger: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-danger')
  })

  it('should render Link Button', () => {
    component.setProps({
      link: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-link')
  })

  it('should render primary lg button', () => {
    component.setProps({
      primary: true,
      lg: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-lg btn-primary')
  })

  it('should render primary sm button', () => {
    component.setProps({
      primary: true,
      sm: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-sm btn-primary')
  })

  it('should render primary xs button', () => {
    component.setProps({
      primary: true,
      xs: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-xs btn-primary')
  })

  it('should render primary xs button with custom className prop', () => {
    component.setProps({
      className: 'customButtonClass',
      primary: true,
      xs: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-xs btn-primary customButtonClass')
  })

  it('should handle onClick', () => {
    const handleClick = jest.fn()

    component.setProps({
      onClick: handleClick,
    })

    expect(handleClick).not.toHaveBeenCalled()
    component.find('a').simulate('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
