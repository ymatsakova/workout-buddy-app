import './Input.css'

import React from 'react'
import PropTypes from 'prop-types'

export const Input = props => {
  const { label, onChange, type, value } = props

  return (
    <div className='input-container'>
      <label>{label}</label>
      <input
        className='workout-input'
        onChange={e => onChange(e?.target?.value)}
        type={type}
        value={value}
        min={type === 'number' ? 0 : null}
      />
    </div>
  )
}

Input.defaultProps = {
  type: null,
  value: ''
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string
}
