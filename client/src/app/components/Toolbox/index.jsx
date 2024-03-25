"use client";
import { COLORS, MENU_ITEMS } from "@/constant";
import { changeBrushSize, changeColor } from "@/lib/features/toolboxSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { socket } from "@/socket";


const ToolBox = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const { activeMenuItem } = useSelector((state) => state.menu);
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
    socket.emit("changeConfig", {color, size: e.target.value})
  };

  const updateColor = (e) => {
    const clickedColor = e.target.getAttribute("data-color");
    console.log("new color", clickedColor);
    dispatch(changeColor({ item: activeMenuItem, color: clickedColor }));
    socket.emit("changeConfig", {color: clickedColor, size})
  };

  const isActive = (item) =>
    item === color ? "border-2 border-text2 shadow-shadow2" : "";

  return (
    <>
      <div className="absolute md:p-5 p-2 md:left-5 left-0 top-1/4">
        <div
          className="p-2 bg-[#F9F6EE] mb-2 rounded-md cursor-pointer"
          onClick={() => setShow((prv) => !prv)}
        >
          {show ? (
            <IoIosArrowDown className="h-5 w-5" />
          ) : (
            <IoIosArrowUp className="h-5 w-5" />
          )}
        </div>

        {
          <div
            className={` ${
              show ? "" : "hidden"
            } p-5 absolute md:left-4 left-2 w-64 rounded-md shadow-shadow1 border border-border1 bg-background1`}
          >
            {activeMenuItem === "PENCIL" && (
              <div className="mb-5">
                <h4 className="text-[15px] text-text1">Stroke</h4>
                <div
                  className="flex justify-between mt-2"
                  onClick={(e) => updateColor(e)}
                >
                  <div
                    className={`h-5 w-5 mr-1  rounded-sm cursor-pointer bg-RED hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2 ${isActive(
                      COLORS.RED
                    )}`}
                    data-color={COLORS.RED}
                  />
                  <div
                    className={`h-5 w-5 mr-1 rounded-sm cursor-pointer bg-BLACK hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2 ${isActive(
                      COLORS.BLACK
                    )}`}
                    data-color={COLORS.BLACK}
                  />
                  <div
                    className={`h-5 w-5 mr-1 rounded-sm cursor-pointer bg-GREEN hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2 ${isActive(
                      COLORS.GREEN
                    )}`}
                    data-color={COLORS.GREEN}
                  />
                  <div
                    className={`h-5 w-5 mr-1 rounded-sm cursor-pointer bg-ORANGE hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2 ${isActive(
                      COLORS.ORANGE
                    )}`}
                    data-color={COLORS.ORANGE}
                  />
                  <div
                    className={`h-5 w-5 mr-1 rounded-sm cursor-pointer bg-YELLOW hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2 ${isActive(
                      COLORS.YELLOW
                    )}`}
                    data-color={COLORS.YELLOW}
                  />
                  <div
                    className={`h-5 w-5 mr-1 rounded-sm cursor-pointer bg-WHITE hover:border-[1.5px] hover:border-border2 border hover:shadow-shadow2 ${isActive(
                      COLORS.WHITE
                    )}`}
                    data-color={COLORS.WHITE}
                  />
                  <div
                    className={`h-5 w-5 mr-1 rounded-sm cursor-pointer bg-BLUE hover:border-[1.5px] hover:border-border2 hover:shadow-shadow2 ${isActive(
                      COLORS.BLUE
                    )}`}
                    data-color={COLORS.BLUE}
                  />
                </div>
              </div>
            )}

            <div>
              <h4 className="text-[15px] text-text1">
                Brush size {activeMenuItem}
              </h4>
              <div>
                <input
                  type="range"
                  min={1}
                  max={activeMenuItem === "PENCIL" ? 10 : 50}
                  step={1}
                  onChange={updateBrushSize}
                  value={size}
                />
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default ToolBox;
