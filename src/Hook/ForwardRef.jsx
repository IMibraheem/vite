import React from 'react'
import { forwardRef } from 'react'
import { useRef } from 'react'

const ForwardRef = () => {
    let userName=useRef(null)
    let password=useRef(null)
    const handleFormSubmit=(e)=>{
        e.preventDefault()
        console.log(userName.current.value)
        console.log(password.current.value)
    }

  return (
     <form onSubmit={handleFormSubmit}>
      <ChildRef type="text" label='userName' ref={userName} />
      <ChildRef type="password" label='password'  ref={password}/>
      <button>Click</button>
    </form>
  )
}

export default ForwardRef


const ChildRef =forwardRef(({label,type},ref)=>{
    return(
        <input type={type} placeholder={label} ref={ref} />
    )
})