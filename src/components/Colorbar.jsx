function ColorButton({color}) {
    return (
        <button className="text-black rounded-xl w-[4rem] h-[2rem] bg-blue-300 border border-blue-900">
            {color || "Black"}
        </button>
    )
}

function Colorbar() {
    return (
        <div className="bg-white p-4 pt-2 pb-2 rounded-2xl flex flex-row flex-wrap w-[70vw] min-h-[3rem] gap-4">
            <ColorButton color="red" />
            <ColorButton color="pink" />
            <ColorButton color="pink" />
            <ColorButton color="pink" />
            <ColorButton color="pink" />
            <ColorButton color="pink" />

        </div>
    )
}



export default Colorbar;