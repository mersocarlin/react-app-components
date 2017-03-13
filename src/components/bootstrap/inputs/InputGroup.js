import React from 'react'
import _ from 'lodash'

const InputGroup = ({ children, leftAddon, rightAddon }) => (
  <div className="input-group">
    {leftAddon && (
      (_.isArray(leftAddon) ? leftAddon : [leftAddon]).map((addon, index) => (
        <span key={index} className="input-group-addon">
          {addon}
        </span>
      ))
    )}
    {children}
    {rightAddon && (
      (_.isArray(rightAddon) ? rightAddon : [rightAddon]).map((addon, index) => (
        <span key={index} className="input-group-addon">
          {addon}
        </span>
      ))
    )}
  </div>
)

export default InputGroup
