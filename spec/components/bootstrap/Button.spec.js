import React from 'react'
import { mount } from 'enzyme'

import { Button } from '../../../src'

describe('Button', () => {
  let component 

  beforeEach(() => {
    component = mount(<Button>Click-me!</Button>)
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
  })

  it('should render as <button> tag', () => {
    component.setProps({
      asButton: true,
    })

    expect(component.find('button')).toHaveLength(1)
  })

  it('should render Primary Button', () => {
    component.setProps({
      primary: true,
    })

    const props = component.find('a').props()

    expect(props).toHaveProperty('className', 'btn btn-primary')
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
