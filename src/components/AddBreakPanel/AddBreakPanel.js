
import './AddBreakPanel.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from '../generic/Input/Input'
import { Button } from '../generic/Button/Button'

export const AddBreakPanel = props => {
  const { onBreakTimeAdd, onExit } = props
  const [ time, setTime ] = useState('0')

  return (
    <div className='time-break-panel-container'>
      <Input
        label='Break between workouts'
        onChange={name => setTime(name)}
        value={time}
      />
      <div className='button-container'>
        <Button
          label={'Go back'}
          onClick={onExit}
        />
        <Button
          label='Add'
          onClick={() => onBreakTimeAdd(time)}
        />
      </div>
    </div>
  )
}

AddBreakPanel.propTypes = {
  onBreakTimeAdd: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired
}
