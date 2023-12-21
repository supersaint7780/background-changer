import { useState } from "react"

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="h-screen w-screen flex items-end justify-center p-8 duration-200"
      style={{ backgroundColor: color }}>

      <div className="bg-white p-4 pt-2 pb-2 rounded-2xl flex flex-row flex-wrap w-[70vw] min-h-[3rem] gap-2">
        <button onClick={() => setColor("red")} style={{backgroundColor: "red"}} className="text-black p-1 rounded-xl min-w-[4rem] min-h-[2rem] bg-red border border-black">
          Red
        </button>
        <button onClick={() => setColor("blue")} style={{backgroundColor: "blue"}} className="text-black p-1 shadow-md rounded-xl min-w-[4rem] min-h-[2rem] border border-black">
          Blue
        </button>
        <button onClick={() => setColor("green")} style={{backgroundColor: "green"}} className="text-black p-1 shadow-md rounded-xl min-w-[4rem] min-h-[2rem] border border-black">
          Green            
        </button>
        <button onClick={() => setColor("olive")} style={{backgroundColor: "olive"}} className="text-black p-1 shadow-md rounded-xl min-w-[4rem] min-h-[2rem] border border-black">
          Olive
        </button>
        <button onClick={() => setColor("gray")} style={{backgroundColor: "gray"}} className="text-black p-1 shadow-md rounded-xl min-w-[4rem] min-h-[2rem] border border-black">
          Gray            
        </button>
        <button onClick={() => setColor("yellow")} style={{backgroundColor: "yellow"}} className="text-black p-1 shadow-md rounded-xl min-w-[4rem] min-h-[2rem] border border-black">
          Yellow
        </button>
        <button onClick={() => setColor("pink")} style={{backgroundColor: "pink"}} className="text-black p-1 shadow-md rounded-xl min-w-[4rem] min-h-[2rem] border border-black">
          Pink
        </button>
        <button onClick={() => setColor("purple")} style={{backgroundColor: "purple"}} className="text-black p-1 shadow-md rounded-xl min-w-[4rem] min-h-[2rem] border border-black">
          Purple
        </button>
        <button onClick={() => setColor("lavender")} style={{backgroundColor: "lavender"}} className="text-black p-1 px-2 shadow-md rounded-xl min-w-[4rem] min-h-[2rem] border border-black">
          Lavendar            
        </button>
        <button onClick={() => setColor("white")} style={{backgroundColor: "white"}} className="text-black p-1 shadow-md rounded-xl min-w-[4rem] min-h-[2rem] border border-black">
          White
        </button>
        <button onClick={() => setColor("black")} style={{backgroundColor: "black"}} className="text-white p-1 shadow-md rounded-xl min-w-[4rem] min-h-[2rem] border border-black">
          Black            
        </button>
        <button onClick={() => setColor("cyan")} style={{backgroundColor: "cyan"}} className="text-black p-1 shadow-md rounded-xl min-w-[4rem] min-h-[2rem] border border-black">
          Cyan
        </button> 

      </div>

    </div>
  )
}

export default App
