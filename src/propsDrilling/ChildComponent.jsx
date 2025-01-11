import React from 'react'
import GrandChildComponent from './GrandChildComponent'

const ChildComponent = ({drilling}) => {
  return (
    <div>
      <GrandChildComponent drilling={drilling}/>
    </div>
  )
}

export default ChildComponent
