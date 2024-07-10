import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-1 py-2 rounded-7xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 rounded-full full py-1 shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 rounded-full  py-1 shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 rounded full  py-1 shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 rounded full  py-1 shadow-lg"
              style={{ backgroundColor: "blue " }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("orange ")}
              className="outline-none px-4 rounded full  py-1 shadow-lg"
              style={{ backgroundColor: "orange " }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("brown")}
              className="outline-none px-4 rounded full  py-1 shadow-lg"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
              onClick={() => setColor("magenta")}
              className="outline-none px-4 rounded full  py-1 shadow-lg"
              style={{ backgroundColor: "magenta" }}
            >
              magenta
            </button>
            <button
              onClick={() => setColor("magenta")}
              className="outline-none px-4 rounded full  py-1 shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none px-4 rounded full py-1 shadow-lg"
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
            <button
              className="outline-none rounded full px-4 py-1 shadow-lg text-white"
              onClick={() => setColor("black")}
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
// inline css ko inject krne k liye hm style k lie double brackets
// use krte h {{ }}
