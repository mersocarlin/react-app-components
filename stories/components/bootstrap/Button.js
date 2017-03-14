import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Button, Icon } from '../../../src'

export default () => {
  storiesOf('Bootstrap > Button', module)
    .add('Default', () => (
      <Button>Click-me!</Button>
    ))
    .add('Primary', () => (
      <Button asButton primary>Click-me!</Button>
    ))
    .add('Secondary', () => (
      <Button asButton secondary>Click-me!</Button>
    ))
    .add('Success', () => (
      <Button asButton success>Click-me!</Button>
    ))
    .add('Info', () => (
      <Button asButton info>Click-me!</Button>
    ))
    .add('Warning', () => (
      <Button asButton warning>Click-me!</Button>
    ))
    .add('Danger', () => (
      <Button asButton danger>Click-me!</Button>
    ))
    .add('Link', () => (
      <Button asButton link>Click-me!</Button>
    ))
    .add('Disabled', () => (
      <Button asButton primary disabled>Click-me!</Button>
    ))
    .add('with Icon', () => (
      <Button asButton primary>
        <Icon icon="hand-spock-o" /> Click-me!
      </Button>
    ))
}
