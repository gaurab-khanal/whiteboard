"use client"
import { MENU_ITEMS } from '@/constant';
import React, { useEffect, useLayoutEffect,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionItemClick } from "@/lib/features/menuSlice";
import { socket } from '@/socket';



const Board = () => {

  const drawHistory = useRef([]);
  const historyPointer = useRef(-1);
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
      }else if (actionMenuItem === MENU_ITEMS.UNDO){
        if(historyPointer.current > 0){
          historyPointer.current -= 1;
          const imageData = drawHistory.current[historyPointer.current];
          context.putImageData(imageData, 0, 0)
        }else if(historyPointer.current === 0){
          context.clearRect(0, 0, canvas.width, canvas.height);
        }
      }else if (actionMenuItem === MENU_ITEMS.REDO){
        if(historyPointer.current < drawHistory.current.length - 1){
          historyPointer.current += 1;
          const imageData = drawHistory.current[historyPointer.current];
          context.putImageData(imageData, 0, 0)
        }
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
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
          drawHistory.current.push(imageData);
          historyPointer.current = drawHistory.current.length - 1;
        }

        canvas.addEventListener('mousedown', handleMouseDown ) 
        canvas.addEventListener('mouseup', handleMouseUp ) 
        canvas.addEventListener('mousemove', handleMouseMove ) 

        socket.on("connect", ()=>{
          console.log("Client connected")
        })

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