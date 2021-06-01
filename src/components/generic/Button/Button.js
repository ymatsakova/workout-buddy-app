import './Button.css'

import React from 'react'
import PropTypes from 'prop-types'

export const Button = props => {
  const { label, onClick } = props

  return (
    <button
      className='workout-button'
      onClick={onClick}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
