"use client";
import { MENU_ITEMS } from "@/constant";
import { actionItemClick, menuItemClick } from "@/lib/features/menuSlice";
import React from "react";
import { FaEraser, FaPencilAlt, FaDownload } from "react-icons/fa";
import { FaArrowRotateLeft, FaArrowRotateRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {

  const {activeMenuItem} = useSelector((state)=> state.menu);

  const dispatch = useDispatch();

  const handleMenuClick = (item) => {
    dispatch(menuItemClick(item));
  };

  const isActive = (item) => item === activeMenuItem ? 'bg-text2' : '';

  return (
    <div className="absolute px-5 py-1 flex justify-between w-[50%] md:w-1/4 left-1/2 top-10 rounded-md border border-border2 border-solid translate-x-[-50%] bg-background1 shadow">
      <div
        className={`cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-text2 ${isActive(MENU_ITEMS.PENCIL)}`}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <FaPencilAlt className="text-text1 font-[20px]" />
      </div>
      <div
       className={`cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-text2 ${isActive(MENU_ITEMS.ERASER)}`}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <FaEraser className="text-text1 font-[20px]" />
      </div>
      <div className="cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-text2">
        <FaArrowRotateLeft className="text-text1 font-[20px]" />
      </div>
      <div className="cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-text2">
        <FaArrowRotateRight className="text-text1 font-[20px]" />
      </div>
      <div className="cursor-pointer flex justify-center items-center h-10 w-10 rounded-md hover:bg-text2">
        <FaDownload className="text-text1 font-[20px]" />
      </div>
    </div>
  );
};

export default Menu;
