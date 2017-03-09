import React from 'react'
import { shallow } from 'enzyme'

import { Text } from '../../../src'

describe('Text', () => {
  let component

  beforeEach(() => {
    component = shallow(<Text />)
  })

  it('should render default Text component', () => {
    expect(component).not.toBeNull()

    const props = component.props()

    expect(props).toHaveProperty('type', 'text')
  })

  it('should render input type password', () => {
    component.setProps({
      type: 'password',
    })

    const props = component.props()

    expect(props).toHaveProperty('type', 'password')
  })

  it('should render input type url', () => {
    component.setProps({
      type: 'url',
    })

    const props = component.props()

    expect(props).toHaveProperty('type', 'url')
  })
})
