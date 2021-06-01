import './AddExercisePanel.css'

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../generic/Button/Button'
import { Input } from '../generic/Input/Input'


export const AddExercisePanel = props => {
  const { onCardAdd, onExit } = props

  const [ name, setName ] = useState('')
  const [ time, setTime ] = useState('0')
  const [ error, setError ] = useState(false)

  return (
    <div className='exercise-panel-container'>
      <Input
        label='Workout name'
        onChange={name => {
          setError(false)
          setName(name.trim())
        }}
        value={name}
        hasError={error}
      />
      <Input
        label='Workout time (in seconds)'
        onChange={time => setTime(time)}
        type='number'
        value={time}
      />
      {error && <span>{'Exercise name is required.'}</span>}
      <div className='button-container'>
        <Button
          label={'Go back'}
          onClick={onExit}
        />
        <Button
          label='Add'
          onClick={() => {
            name && onCardAdd({ name, time })
            !name && setError(true)
          }}
        />
      </div>
    </div>
  )
}

AddExercisePanel.propTypes = {
  onCardAdd: PropTypes.func.isRequired,
  onExit: PropTypes.func.isRequired
}
