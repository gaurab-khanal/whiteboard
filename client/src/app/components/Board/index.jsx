"use client"
import { MENU_ITEMS } from '@/constant';
import React, { useEffect, useLayoutEffect,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionItemClick } from "@/lib/features/menuSlice";

const Board = () => {

  const {activeMenuItem, actionMenuItem} = useSelector((state)=> state.menu);

  const shouldDraw = useRef(false);

  const dispatch = useDispatch();
  
  const {color, size} = useSelector((state)=> state.toolbox[activeMenuItem]);

    const canvasRef = useRef(null);

    useEffect(()=>{
      if(!canvasRef.current) return
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if(actionMenuItem === MENU_ITEMS.DOWNLOAD){
       
        const url = canvas.toDataURL();
        const a = document.createElement('a');
        a.href = url;
        a.download = 'canvas-image.jpeg';
        a.click();
      }
      
      dispatch(actionItemClick(null))
    }, [actionMenuItem])

    useEffect(()=>{
      if(!canvasRef.current) return
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const changeCanvasConfig = ()=>{
          
          context.strokeStyle = color;
          context.lineWidth = size;
        }
        changeCanvasConfig();
    }, [color, size])

    useLayoutEffect(()=>{
        if(!canvasRef.current) return
        const canvas = canvasRef.current;

        const context = canvas.getContext('2d');

        // when mounting
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const beginPath = (x,y)=>{
          context.beginPath()
          context.moveTo(x, y)
        }

        const drawPath = (x,y)=>{
          context.lineTo(x, y);
          context.stroke()
        }

        const handleMouseDown = (e)=>{
          shouldDraw.current = true;
          beginPath(e.clientX, e.clientY)
         
        } 
        const handleMouseMove = (e)=>{
          if(!shouldDraw.current) return
          // draw line
          drawPath(e.clientX, e.clientY)
         
        }
        const handleMouseUp = (e)=>{
          shouldDraw.current = false;
        }

        canvas.addEventListener('mousedown', handleMouseDown ) 
        canvas.addEventListener('mouseup', handleMouseUp ) 
        canvas.addEventListener('mousemove', handleMouseMove ) 


        return ()=>{
          canvas.removeEventListener('mousedown', handleMouseDown ) 
          canvas.removeEventListener('mouseup', handleMouseUp ) 
          canvas.removeEventListener('mousemove', handleMouseMove ) 
        }
    }, [])

  return (
    <canvas ref={canvasRef} style={{ backgroundColor: 'white' }}></canvas>
  )
}

export default Board