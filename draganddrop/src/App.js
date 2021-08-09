import React, { useState } from "react";
import './App.css';
import {Box} from "./Box";

const App = () => {

  const [dragItem, setDragItem] = useState();
  const [boxes, setBoxes] = useState([
    { id: "Box-1", order: 1 },
    { id: "Box-2", order: 2 },
    { id: "Box-3", order: 3 },
    { id: "Box-4", order: 4 }
  ]);

  const handleAddBox = () => {
    const position = boxes.length +1;
    boxes.push({id: `newBox-${position}`, order: position});
    setBoxes([...boxes]);
  };

  const handleDragStart = (index) => {
    setDragItem(index);
    console.log("handleDragStart",index);
  };

  console.log(boxes);

  const handleDragEnter = (e, index) => {
    e.target.style.backgroundColor = "#336699";
    const newBoxes = [...boxes];
    const item = newBoxes[dragItem];
    console.log("item", item);
    newBoxes.splice(dragItem, 1);
    newBoxes.splice(index, 0, item);
    console.log("newBoxes", newBoxes);
    setDragItem(index);
    setBoxes(newBoxes);
  };

  const handleDragLeave = (e) => {
    e.target.style.backgroundColor = "gray";
  };
  
  const handleDrop = (e) => {
    e.target.style.backgroundColor = "gray";
  };

  return (
    <div className="App">
      <button type="button" onClick={handleAddBox}>Click Me!</button>
      {
        boxes.map((box, index)=>{
          return (
            <Box key={index}
              boxId={box.id}
              handleDragStart={()=>handleDragStart(index)}
              handleDragEnter={(e)=>handleDragEnter(e,index)}
              handleDragLeave={handleDragLeave}
              handleDrop={handleDrop}
              
            />
          );
        })
      }
    </div>
  );
}

export default App;
