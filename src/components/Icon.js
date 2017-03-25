import React from 'react'
import { compose, withHandlers, withProps } from 'recompose'

const Icon = ({ fw, icon, onClick, size }) => (
  <i className={`fa fa-${icon}${fw}${size}`} onClick={onClick} />
)

export default compose(
  withProps(({ fw = '', lg = '', x2 = '', x3 = '', x4 = '', x5 = '' }) => ({
    fw: fw && ' fa-fw',
    size: (
      (lg && ' fa-lg') ||
      (x2 && ' fa-2x') ||
      (x3 && ' fa-3x') ||
      (x4 && ' fa-4x') ||
      (x5 && ' fa-5x')
    ),
  })),
  withHandlers({
    onClick: ({ onClick }) => () => {
      if (!onClick) {
        return
      }

      onClick()
    },
  }),
)(Icon)
