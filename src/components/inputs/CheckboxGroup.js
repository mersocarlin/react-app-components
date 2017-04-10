import React from 'react'
import { compose, withHandlers } from 'recompose'

import Checkbox from './Checkbox'

const CheckboxGroup = ({ items, onClick, value = [] }) => (
  <div>
    {items.map(item => (
      <Checkbox
        key={item.id}
        checked={value && value.indexOf(item.id) !== -1}
        onClick={onClick}
        value={item.id}
      >
        {item.text}
      </Checkbox>
    ))}
  </div>
)

export default compose(
  withHandlers({
    onClick: ({ onChange, value = [] }) => (selectedValue) => {
      if (!onChange) {
        return
      }

      const idx = value.indexOf(selectedValue)

      if (idx >= 0) {
        onChange([
          ...value.slice(0, idx),
          ...value.slice(idx + 1),
        ])
      } else {
        onChange([...value, selectedValue])
      }
    },
  }),
)(CheckboxGroup)

