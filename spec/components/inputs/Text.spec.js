import React from 'react'
import { shallow } from 'enzyme'

import { Text } from '../../../src'

describe('Text', () => {
  const wrapper = (props = {}) => (
    shallow(<Text {...props} />)
  )

  it('should render default Text component', () => {
    const component = wrapper()

    expect(component).not.toBeNull()

    const props = component.props()

    expect(props).toHaveProperty('type', 'text')
  })

  it('should render input type password', () => {
    const component = wrapper({ type: 'password' })

    const props = component.props()

    expect(props).toHaveProperty('type', 'password')
  })

  it('should render input type url', () => {
    const component = wrapper({ type: 'url' })

    const props = component.props()

    expect(props).toHaveProperty('type', 'url')
  })
})
