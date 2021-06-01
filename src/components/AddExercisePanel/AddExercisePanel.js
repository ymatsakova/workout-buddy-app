import './AddExercisePanel.css'

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../generic/Button/Button'
import { Input } from '../generic/Input/Input'


export const AddExercisePanel = props => {
  const { onCardAdd, onExit } = props

  const [ name, setName ] = useState('')
  const [ time, setTime ] = useState('0')

  return (
    <div className='exercise-panel-container'>
      <Input
        label='Exercise name'
        onChange={name => setName(name)}
        value={name}
      />
      <Input
        label='Workout time (in seconds)'
        onChange={time => setTime(time)}
        type='number'
        value={time}
      />
      <div className='button-container'>
        <Button
          label={'Go back'}
          onClick={onExit}
        />
        <Button
          label='Add'
          onClick={() => onCardAdd({ name: name || 'Workout', time })}
        />
      </div>
    </div>
  )
}

AddExercisePanel.propTypes = {
  onCardAdd: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired
}
