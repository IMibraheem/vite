import React from 'react'

const ChilderenComponent = ({data}) => {
    let {id ,userId ,title,body}=data
    const handleHover = ()=>{
        alert("data")
    }
  return (
    <div key={id} className="p-4 border shadow-xl bg-gray-200 flex flex-col gap-4 rounded-xl">
    <div className="flex justify-between ">
      <h1 className="bg-teal-400 p-2" >userId: {userId}</h1>
      <h1 className="bg-green-400 p-2">Id : {id}</h1>
    </div>
    <h5 className="font-bold">title : <span className="font-medium text-gray-700">{title} </span></h5>
    <p className="font-bold">Body : <span className="font-medium text-gray-700">{body} </span></p>
  </div>
  )
}

export default ChilderenComponent