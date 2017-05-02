import React from 'react'
import { compose, withProps } from 'recompose'
import { compact } from 'lodash'

const FormGroup = ({ className, input, label }) => (
  <div className={className}>
    {label}
    {input}
  </div>
)

const parseValidation = ({
  hasDanger,
  hasError,
  hasSuccess,
  hasWarning,
}) => (
  (hasDanger && 'has-danger') ||
  (hasError && 'has-error') ||
  (hasSuccess && 'has-success') ||
  (hasWarning && 'has-warning') ||
  ''
)

const parseFormGroupCssClass = ({ className, ...rest }) => (
  compact([
    'form-group',
    parseValidation(rest),
  ]).join(' ')
)

export default compose(
  withProps(props => ({
    className: parseFormGroupCssClass(props),
  })),
)(FormGroup)
