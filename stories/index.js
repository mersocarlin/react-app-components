import { addDecorator } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'

import addWelcome from './Welcome'
import addComponents from './components'

addDecorator(withKnobs)

addWelcome()
addComponents()
