import React from 'react'

import Radio from './Radio'

const RadioGroup = ({ items, name, onChange, value, ...rest }) => (
  <div {...rest}>
    {items.map(item => (
      <Radio
        key={item.id}
        checked={item.id === value}
        name={name}
        onClick={newValue => onChange && newValue !== value && onChange(newValue)}
        value={item.id}
      >
        {item.text}
      </Radio>
    ))}
  </div>
)

export default RadioGroup
