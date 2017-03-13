import React from 'react'
import { mount } from 'enzyme'

import { Icon, InputGroup, Text } from '../../../../src'

describe('InputGroup', () => {
  let component 

  beforeEach(() => {
    component = mount(
      <InputGroup>
        <Text value="testing" />
      </InputGroup>,
    )
  })

  it('should render default InputGroup component', () => {
    expect(component).not.toBeNull()

    expect(component.find(Text)).not.toBeNull()
    expect(component.find('.input-group-addon')).toHaveLength(0)
  })

  it('should render InputGroup with a left addon', () => {
    component.setProps({
      leftAddon: <Icon icon="code" />,
    })

    expect(component.find('.input-group-addon')).toHaveLength(1)
    expect(component.find(Icon)).toHaveLength(1)
  })

  it('should render InputGroup with a right addon', () => {
    component.setProps({
      rightAddon: '@',
    })

    expect(component.find('.input-group-addon')).toHaveLength(1)
  })

  it('should render InputGroup with left and right addons', () => {
    component.setProps({
      leftAddon: '@',
      rightAddon: '@',
    })

    expect(component.find('.input-group-addon')).toHaveLength(2)
  })

  it('should render InputGroup with two left addons', () => {
    component.setProps({
      leftAddon: ['@', '#'],
    })

    expect(component.find('.input-group-addon')).toHaveLength(2)
  })

  it('should render InputGroup with two right addons', () => {
    component.setProps({
      rightAddon: ['@', '#'],
    })

    expect(component.find('.input-group-addon')).toHaveLength(2)
  })
})
