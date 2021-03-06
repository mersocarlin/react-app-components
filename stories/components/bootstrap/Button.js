import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Button, Icon } from '../../../src'

export default () => {
  storiesOf('Bootstrap > Button', module)
    .add('Default', () => (
      <div>
        <Button>Default</Button><br />
        <Button asButton primary>Primary</Button><br />
        <Button asButton secondary>Secondary</Button><br />
        <Button asButton success>Success</Button><br />
        <Button asButton info>Info</Button><br />
        <Button asButton warning>Warning</Button><br />
        <Button asButton danger>Danger</Button><br />
        <Button asButton link>Link</Button><br />
        <Button asButton primary disabled>Disabled</Button><br />
        <Button asButton primary lg>lg Button</Button><br />
        <Button asButton primary sm>sm Button</Button><br />
        <Button asButton primary xs>xs Button (Bootstrap v3 only)</Button><br />
        <Button asButton primary>
          <Icon icon="hand-spock-o" /> With Icon
        </Button><br />
        <Button className="customCssClass">Custom css class.</Button><br />
        <Button asButton primary className="customCssClass">Primary Custom css class.</Button><br />
      </div>
    ))
}
