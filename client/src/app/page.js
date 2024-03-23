
import Image from "next/image";
import Menu from "./components/Menu/index.jsx";
import ToolBox from "./components/Toolbox/index.jsx";
import Board from "./components/Board/index.jsx";

export default function Home() {
  return (
   <>
   <Menu/>
   <ToolBox/>
   <Board/>
   </>
  );
}
