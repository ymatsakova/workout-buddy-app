import './ExerciseBuilderContainer.css'

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { AddBreakPanel } from '../../components/AddBreakPanel/AddBreakPanel'
import { AddExercisePanel } from '../../components/AddExercisePanel/AddExercisePanel'
import { WorkoutCard } from '../../components/WorkoutCard/WorkoutCard'
import { Button } from '../../components/generic/Button/Button'


export const ExerciseBuilderContainer = props => {
  const {
    cards,
    onBreakAdd,
    onCardAdd,
    showAddBreakButton,
    setWorkoutStart
  } = props

  const [ isAddExerciseMode, setExerciseMode ] = useState(false)
  const [ isAddBreakMode, setAddBreakMode ] = useState(false)
  const hasCards = cards?.length > 0

  const handleCardAdd = card => {
    onCardAdd([ ...cards, card ])
    setExerciseMode(false)
  }

  const handleAddBreak = breakTime => {
    onBreakAdd(breakTime)
    setAddBreakMode(false)
  }

  const renderWelcomeMode = () => {
    return (
      <>
        <h1>{'Workout Buddy - build your workout session'}</h1>
        <div className={classnames(
          'builder-container',
          { 'has-cards': hasCards || showAddBreakButton }
        )}
        >
          <h3>{hasCards ? (
            'Add an exercise or click Start button to start your workout session.'
          ) : (
            'Click the button below to start building your workout.')
          }
          </h3>
          <div className='button-container'>
            <Button
              label={'Add exercise'}
              onClick={() => setExerciseMode(true)}
            />
            {showAddBreakButton && (
              <Button
                label='Add break'
                onClick={() => setAddBreakMode(true)}
              />
            )}
            {hasCards && (
              <Button
                label='Start'
                onClick={() => setWorkoutStart(true)}
              />
            )}
          </div>
          {hasCards && (
            <div className='card-container'>
              {cards?.map((card, index) => <WorkoutCard card={card} key={index} />)}
            </div>
          )}
        </div>
      </>
    )}

  const renderAddExerciseMode = () => {
    return (
      <div>
        <h1>{'Enter your exercise name and time'}</h1>
        <div className='builder-container'>
          <AddExercisePanel onCardAdd={handleCardAdd} onExit={() => setExerciseMode(false)} />
        </div>
      </div>
    )
  }

  const renderAddBreakMode = () => {
    return (
      <div>
        <h1>{'Enter the time of your break'}</h1>
        <div className='builder-container'>
          <AddBreakPanel onBreakTimeAdd={handleAddBreak} onExit={() => setAddBreakMode(false)} />
        </div>
      </div>
    )
  }

  return (
    <div>
      {!isAddExerciseMode && !isAddBreakMode && renderWelcomeMode()}
      {isAddExerciseMode && renderAddExerciseMode()}
      {!isAddExerciseMode && isAddBreakMode && renderAddBreakMode()}
    </div>
  )
}

ExerciseBuilderContainer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    time: PropTypes.string
  })).isRequired,
  onBreakAdd: PropTypes.func.isRequired,
  onCardAdd: PropTypes.func.isRequired,
  showAddBreakButton: PropTypes.bool.isRequired,
  setWorkoutStart: PropTypes.func.isRequired
}
