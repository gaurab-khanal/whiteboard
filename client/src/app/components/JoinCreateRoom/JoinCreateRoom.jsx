"use client"
import { setRoomId } from "@/lib/features/roomIdSlice";
import { socket } from "@/socket";
import React, {useState} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JoinCreateRoom = ({setShow}) => {

    const dispatch = useDispatch();
    const {roomId: id} = useSelector((state)=> state.roomId);

    const [roomId, setroomId] = useState("")
    const [type, setType]  = useState(false)
    const [copied, setCopied] = useState(false);

    const createRoom = ()=>{
        const id = uuidv4();
        socket?.emit("join-room", id)
        dispatch(setRoomId(id))
        localStorage.setItem("roomId", id)
        setCopied(false)
        setroomId(id)
    }

    const JoinRoom = ()=>{
        localStorage.setItem("roomId", roomId)
        dispatch(setRoomId(roomId))
        socket?.emit("join-room", roomId)
        toast.success("Room Joined Successfully")
        console.log("Join Room: ", roomId)
    }

  return (
    <>
        <div className="flex justify-between">

      <h1 className="text-lg font-semibold mb-4">Collaborate with peers</h1>
      <ImCross className="cursor-pointer" onClick={()=>setShow(false)}/>
        </div>
      <div className="flex items-center space-x-2">
        <input
          className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1"
          type="text"
          onChange={(e)=>setroomId(()=>{
            setType(true)
            return e.target.value
          })}
          placeholder="Room ID"
        />
        <button
          type="button"
          onClick={JoinRoom}
          className="rounded-md bg-BLUE text-WHITE whitespace-nowrap px-4 py-2 text-sm font-semibold shadow-md hover:bg-BLUE/60 focus:outline-none focus-visible:ring focus-visible:ring-black/30 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-50"
        >
          Join Room
        </button>
      </div>
      <div>
        {
           id && !type &&
            <p className="text-sm text-gray-500 mt-6 ">
               <span>Room Id</span> : <span className="w-full p-1 border-BLACK/10 border">{roomId || id}</span>
             <CopyToClipboard text={roomId || id}>
             <span onClick={()=>setCopied(true)} className="rounded-full bg-BLUE px-4 py-2 mt-4  ml-3 cursor-pointer text-sm font-semibold text-WHITE shadow-md hover:bg-BLUE/60 focus:outline-none focus-visible:ring focus-visible:ring-black/30 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-50">{ copied ?  "Copied": "Copy"}</span>
             </CopyToClipboard>
            </p>
    }
      </div>
      <button
        type="button"
        onClick={createRoom}
        className="rounded-full bg-BLUE px-4 py-2 mt-4 text-sm font-semibold text-WHITE shadow-md hover:bg-BLUE/60 focus:outline-none focus-visible:ring focus-visible:ring-black/30 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-50"
      >
        Create Room
      </button>
      <ToastContainer />
    </>
  );
};

export default JoinCreateRoom;
