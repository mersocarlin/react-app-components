import React from 'react'
import { compose, mapProps, withProps } from 'recompose'
import { compact, omit } from 'lodash'

const Button = ({ children, asButton, ...rest }) => {
  const ButtonTag = (
    (asButton && 'button') ||
    'a'
  )

  return (
    <ButtonTag {...rest}>
      {children}
    </ButtonTag>
  )
}

const parseButtonSize = ({ lg, sm, xs }) => (
  (lg && 'btn-lg') ||
  (sm && 'btn-sm') ||
  (xs && 'btn-xs') ||
  ''
)

const parseButtonType = ({
  primary,
  secondary,
  success,
  info,
  warning,
  danger,
  link,
}) => (
  (primary && 'btn-primary') ||
  (secondary && 'btn-secondary') ||
  (success && 'btn-success') ||
  (info && 'btn-info') ||
  (warning && 'btn-warning') ||
  (danger && 'btn-danger') ||
  (link && 'btn-link') ||
  ''
)

const parseButtonCssClass = ({ className, ...rest }) => (
  compact([
    'btn',
    parseButtonSize(rest),
    parseButtonType(rest),
    className || '',
  ]).join(' ')
)

export default compose(
  withProps(props => ({
    className: parseButtonCssClass(props),
  })),
  mapProps(props => ({
    ...omit(
      props,
      [
        'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link',
        'lg', 'sm', 'xs', 'aTag',
      ],
    ),
  })),
)(Button)
