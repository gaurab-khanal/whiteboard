"use client"
import React from 'react'
import { useSelector } from 'react-redux'


const ToolBox = () => {

    const {activeMenuItem} = useSelector((state)=> state.menu);

    const updateBrushSize = ()=>{
        console.log("Brush size changed")
    }


  return (
    <div className="p-5 absolute top-1/4 left-5 w-64 rounded-md shadow-shadow1 border border-border1 bg-background1">
        {activeMenuItem === 'PENCIL' && (
 <div className="mb-5">
 <h4 className='text-[15px] text-text1'>Stroke</h4>
 <div className='flex justify-between mt-2'>
     <div className="h-5 w-5 mr-1 rounded-sm cursor-pointer bg-RED hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2"/>
     <div className="h-5 w-5 mr-1 rounded-sm cursor-pointer bg-BLACK hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2"/>
     <div className="h-5 w-5 mr-1 rounded-sm cursor-pointer bg-GREEN hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2"/>
     <div className="h-5 w-5 mr-1 rounded-sm cursor-pointer bg-ORANGE hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2"/>
     <div className="h-5 w-5 mr-1 rounded-sm cursor-pointer bg-YELLOW hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2"/>
     <div className="h-5 w-5 mr-1 rounded-sm cursor-pointer bg-WHITE hover:border-[1.5px] hover:border-border2 border hover:shadow-shadow2"/>
     <div className="h-5 w-5 mr-1 rounded-sm cursor-pointer bg-BLUE hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2"/>
     
    
    
 </div>
</div>
        )}
       
        <div>
            <h4 className='text-[15px] text-text1'>Brush size {activeMenuItem}</h4>
            <div>
                <input type="range" min={1} max={10} step={1} onChange={updateBrushSize}/>
            </div>
        </div>
    </div>
  )
}

export default ToolBox