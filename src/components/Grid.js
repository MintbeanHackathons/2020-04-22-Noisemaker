import React, { useState } from "react";
import instruments from "../utilities/instruments";

export default ({ grid, playAudio, changeSound }) => {
  console.log(grid, "rendered");
  const [instrument, setInstrument] = useState("none");
  const options = {
    none: null,
    kick: instruments.kick,
    hiHat: instruments.hiHat,
    snare: instruments.snare,
    tom: instruments.tom,
    floorTom: instruments.floorTom
  };
  const handleChange = e => {
    e.preventDefault();
    setInstrument(e.target.value);
  };
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <table id="button-grid">
        <tbody>
          {grid.map((row, rowId) => {
            return (
              <tr key={rowId}>
                {row.map((cell, cellId) => {
                  return (
                    <td
                      key={`row${rowId}cell${cellId}`}
                      style={{
                        backgroundColor: `${
                          cell.instrument ? "orange" : "grey"
                        }`
                      }}
                      onClick={() =>
                        changeSound(rowId, cellId, options[instrument])
                      }
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={playAudio}>PLAY AUDIO</button>
      <select onChange={handleChange} value={instrument}>
        <option value="none">NONE</option>
        <option value="kick">KICK DRUM</option>
        <option value="snare">SNARE</option>
        <option value="hiHat">HI-HAT</option>
        <option value="tom">TOM</option>
        <option value="floorTom">FLOOR TOM</option>
      </select>
    </div>
  );
};
