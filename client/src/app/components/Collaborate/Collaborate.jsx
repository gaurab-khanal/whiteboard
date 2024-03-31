"use client"
import React, { useState } from 'react'
import Model from '../Model/Model'
import JoinCreateRoom from '../JoinCreateRoom/JoinCreateRoom';

const Collaborate = () => {

    const [show,setShow] = useState(false);

  return (
    <>
        <button onClick={()=>setShow((prv)=> !prv)} className="absolute left-10 bottom-10 bg-BLACK hover:bg-BLACK/60 text-WHITE font-bold py-2 px-4 border border-gray-400 rounded shadow">
  Collaborate
  </button>
  <Model show={show} setShowModel={setShow}>
   <JoinCreateRoom setShow={setShow}/>
  </Model>
   </>
  )
}

export default Collaborate