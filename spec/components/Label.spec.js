import React from 'react'
import { shallow } from 'enzyme'

import { Label } from '../../src'

describe('Label', () => {
  let component 

  beforeEach(() => {
    component = shallow(<Label />)
  })

  it('should render default Label component', () => {
    expect(component).not.toBeNull()

    const props = component.props()

    expect(props).toHaveProperty('children', undefined)
  })

  it('should render label with text', () => {
    component.setProps({
      children: 'test',
    })

    expect(component).not.toBeNull()
    expect(component.text()).toBe('test')
  })
})
