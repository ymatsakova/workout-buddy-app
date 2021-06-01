import './ExerciseContainer.css'

import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../components/generic/Button/Button'


export const ExerciseContainer = props => {
  const { breakTime, cards, onExit } = props

  const [ currentCardIndex, setCurrentCardIndex ] = useState(0)
  const [ currentCard, setCurrentCard ] = useState(cards[currentCardIndex])
  const [ isBreak, setBreak ] = useState(false)
  const [ isWorkout, setWorkout ] = useState(true)
  const [ isWorkoutDone, setWorkoutDone ] = useState(false)
  const [ secondCount, setSecondCount ] = useState(Number.parseInt(currentCard.time))
  const [ pause, setPause ] = useState(false)
  let intervalRef = useRef()

  const decreaseNum = () => {
    setSecondCount((prev) => {
      if (prev > 0) {
        return prev - 1
      } else {
        if (isWorkout && !isBreak) {
          setBreak(true)
          setWorkout(false)
          if (currentCardIndex < cards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1)
            setCurrentCard(cards[currentCardIndex + 1])
          } else {
            setWorkoutDone(true)
          }
          return Number.parseInt(breakTime)
        } else {
          setBreak(false)
          setWorkout(true)
          return Number.parseInt(currentCard.time)
        }
      }
    })
  }

  useEffect(() => {
    setPause(false)
    intervalRef.current = setInterval(decreaseNum, 1000)

    return () => clearInterval(intervalRef.current)
  }, [ isWorkout, isBreak ])

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current)
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000)
    }
    setPause((prev) => !prev)
  }

  return (
    <>
      <h1>{'Workout Buddy - build your workout session'}</h1>
      <div className='exercise-container'>
        {!isWorkoutDone && (
          <div className='workout-countdown-card'>
            {isBreak && <div className='workout-break'>{'Take a break'}</div>}
            <div className='workout-name'>{!isBreak && currentCard?.name}</div>
            {!isBreak && (
              <img
                alt='image of timer'
                className='workout-image'
                src='https://media.giphy.com/media/ZbTPNi9bQXCtrxz0Hz/giphy.gif'
              />
            )}
            <div className='workout-countdown'>{secondCount}</div>
          </div>
        )}
        {isWorkoutDone && (
          <h3 className='thank-you-container'>{'Good job! Your workout session is done.'}</h3>
        )}
        <div className='button-container'>
          {!isWorkoutDone && (
            <Button
              label={pause ? 'Run' : 'Pause'}
              onClick={handleClick}
            />
          )}
          <Button
            label='Go back'
            onClick={onExit}
          />
        </div>
      </div>
    </>
  )
}

ExerciseContainer.propTypes = {
  breakTime: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    time: PropTypes.string
  })),
  onExit: PropTypes.func.isRequired
}
