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

const parseButtonType = ({ className, primary, secondary, success, info, warning, danger }) => {
  if (className) {
    return className
  }

  const baseClass = 'btn btn-'
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

export default compose(
  withProps(props => ({
    className: parseButtonType(props),
  })),
  mapProps(({ children, className, aTag, asButton, ...rest }) => ({
    children,
    className,
    aTag,
    asButton,
    ...omit(rest, ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link']),
  })),
)(Button)
