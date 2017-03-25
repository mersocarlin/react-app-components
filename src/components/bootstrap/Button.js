import React from 'react'
import { compose, mapProps, withProps } from 'recompose'
import { omit } from 'lodash'

const Button = ({
  children,
  className,
  aTag,
  asButton,
  ...rest
}) => {
  const ButtonTag = (
    (asButton && 'button') ||
    'a'
  )

  return (
    <ButtonTag
      className={className}
      {...rest}
    >
      {children}
    </ButtonTag>
  )
}

const parseButtonSize = ({ lg, sm, xs }) => {
  if (lg) {
    return ' btn-lg'
  }

  if (sm) {
    return ' btn-sm'
  }

  if (xs) {
    return ' btn-xs'
  }

  return ''
}

const parseButtonType = (props) => {
  const {
    primary,
    secondary,
    success,
    info,
    warning,
    danger,
  } = props

  const baseClass = ' btn-'
  if (primary) {
    return `${baseClass}primary`
  }

  if (secondary) {
    return `${baseClass}secondary`
  }

  if (success) {
    return `${baseClass}success`
  }

  if (info) {
    return `${baseClass}info`
  }

  if (warning) {
    return `${baseClass}warning`
  }

  if (danger) {
    return `${baseClass}danger`
  }

  return `${baseClass}link`
}

const parseButtonCssClass = ({ className, ...rest }) => {
  if (className) {
    return className
  }

  const size = parseButtonSize(rest)
  const type = parseButtonType(rest)

  return `btn${size}${type}`
}

export default compose(
  withProps(props => ({
    className: parseButtonCssClass(props),
  })),
  mapProps(({ children, className, aTag, asButton, ...rest }) => ({
    children,
    className,
    aTag,
    asButton,
    ...omit(
      rest,
      [
        'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link',
        'lg', 'sm', 'xs',
      ],
    ),
  })),
)(Button)
