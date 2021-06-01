import './Input.css'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


export const Input = props => {
  const { hasError, label, onChange, type, value } = props

  return (
    <div className='input-container'>
      <label>{label}</label>
      <input
        className={classnames(
          'workout-input',
          { error: hasError }
        )}
        onChange={e => onChange(e?.target?.value)}
        type={type}
        value={value}
        min={type === 'number' ? 0 : null}
      />
    </div>
  )
}

Input.defaultProps = {
  hasError: false,
  type: null,
  value: ''
}

Input.propTypes = {
  hasError: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string
}
