import './WorkoutCard.css'

import React from 'react'
import PropTypes from 'prop-types'

export const WorkoutCard = props => {
  const { card } = props

  return <div className='workout-card'>
    <div className='card-name'>{card.name}</div>
    <div>{card.time}</div>
  </div>
}

WorkoutCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    time: PropTypes.string
  })
}
