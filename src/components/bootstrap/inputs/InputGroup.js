import React from 'react'
import { isArray } from 'lodash'

const InputGroup = ({ children, leftAddon, rightAddon }) => (
  <div className="input-group">
    {leftAddon && (
      (isArray(leftAddon) ? leftAddon : [leftAddon]).map((addon, index) => (
        <span key={index} className="input-group-addon">
          {addon}
        </span>
      ))
    )}
    {children}
    {rightAddon && (
      (isArray(rightAddon) ? rightAddon : [rightAddon]).map((addon, index) => (
        <span key={index} className="input-group-addon">
          {addon}
        </span>
      ))
    )}
  </div>
)

export default InputGroup
