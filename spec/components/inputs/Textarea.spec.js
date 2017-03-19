import React from 'react'
import { shallow } from 'enzyme'

import { Textarea } from '../../../src'

describe('Textarea', () => {
  let component

  beforeEach(() => {
    component = shallow(<Textarea />)
  })

  it('should render textarea component', () => {
    expect(component).not.toBeNull()

    expect(component.find('textarea')).toHaveLength(1)
  })

  it('should render textarea with given props', () => {
    component.setProps({
      className: 'textarea',
      value: 'testing',
    })

    const props = component.props()
    expect(props).toHaveProperty('className', 'textarea')
    expect(props).toHaveProperty('value', 'testing')
  })

  it('should handle onChange event', () => {
    const handleChange = jest.fn()

    component.setProps({
      onChange: handleChange,
    })

    expect(handleChange).not.toHaveBeenCalled()
    component.simulate('change', { target: { value: '123' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})
