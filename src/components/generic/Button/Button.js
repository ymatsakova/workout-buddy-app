import './Button.css'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


export const Button = props => {
  const { classname, label, onClick } = props

  return (
    <button
      className={classnames(
        'workout-button',
        classname
      )}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

Button.defaultProps = {
  classname: ''
}

Button.propTypes = {
  classname: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
