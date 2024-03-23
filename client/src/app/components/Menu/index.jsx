"use client"
import React from "react";
import {
  FaEraser,
  FaPencilAlt,
  FaDownload,
} from "react-icons/fa";
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";


const Menu = () => {
  return (
    <div className="absolute px-5 py-1 flex justify-between w-1/4 left-1/2 top-10 rounded-md border border-border2 border-solid translate-x-[-50%] bg-background1 shadow">
      <div className="cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-text2">
        
        <FaPencilAlt  className="text-text1 font-[20px]"/>
      </div>
      <div className="cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-text2">
        <FaEraser   className="text-text1 font-[20px]"/>
      </div>
      <div className="cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-text2">
        <FaArrowRotateLeft  className="text-text1 font-[20px]"/>
      </div>
      <div className="cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-text2">
        <FaArrowRotateRight  className="text-text1 font-[20px]"/>
      </div>
      <div className="cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-text2">
        <FaDownload  className="text-text1 font-[20px]"/>
      </div>
    </div>
  );
};

export default Menu;
