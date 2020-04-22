import React, { useState } from "react";
import Grid from "./components/Grid";
import generateTable from "./utilities/generateTable";
import playAudio from "./utilities/playAudio";
import "./App.css";

function App() {
  const [size, setSize] = useState(4);
  const [grid, setGrid] = useState(generateTable(size));
  const changeSound = (row, col, sound = null) => {
    console.log(row, col, sound);
    grid[row][col].instrument = sound;
    const newGrid = [...grid];
    setGrid(newGrid);
  };
  return (
    <div className="App">
      <h1>BEAT MACHINE</h1>
      <Grid
        grid={grid}
        playAudio={() => playAudio(grid, 500)}
        changeSound={changeSound.bind(this)}
      />
    </div>
  );
}

export default App;
