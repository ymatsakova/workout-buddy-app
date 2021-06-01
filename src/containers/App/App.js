import './App.css'

import React, { useState } from 'react'
import { ExerciseBuilderContainer } from '../ExerciseBuilderContainer/ExerciseBuilderContainer'
import { ExerciseContainer } from '../ExerciseContainer/ExerciseContainer'


export const App = () => {
  const [ isWorkoutPage, setWorkoutPage ] = useState(false)
  const [ cards, setCards ] = useState([])
  const [ breakTime, setBreakTime ] = useState(0)

  return (
    <div className='workout-app'>
      {!isWorkoutPage && (
        <ExerciseBuilderContainer
          cards={cards}
          showAddBreakButton={breakTime === 0}
          onCardAdd={setCards}
          onBreakAdd={setBreakTime}
          setWorkoutStart={setWorkoutPage}
        />
      )}
      {isWorkoutPage && (
        <ExerciseContainer
          breakTime={breakTime}
          cards={cards}
          onExit={() => setWorkoutPage(false)}
        />
      )}
    </div>
  )
}
