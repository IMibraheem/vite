import React from 'react'
import ChildComponent from './ChildComponent'

const PropsDrilling = () => {
  return (
    <div>
        <h1>Props Drilling</h1>
        <ChildComponent drilling='Practicing Props Drilling'/>
    </div>
  )
}

export default PropsDrilling
