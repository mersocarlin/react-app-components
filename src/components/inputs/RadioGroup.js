import React from 'react'

import Radio from './Radio'

const RadioGroup = ({ items, name, onChange, value }) => (
  <div>
    {items.map(item => (
      <Radio
        key={item.id}
        checked={item.id === value}
        id={item.id}
        name={name}
        onClick={id => onChange && id !== value && onChange(id)}
      >
        {item.text}
      </Radio>
    ))}
  </div>
)

export default RadioGroup
