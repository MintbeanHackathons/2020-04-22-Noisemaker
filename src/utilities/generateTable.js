const instruments = require("./instruments");

const chooseSound = () => {
  let sounds = Object.values(instruments);
  const num = sounds.length;
  const random = Math.floor(Math.random() * num * 2);
  return random < num ? sounds[random] : null;
};

const createCell = () => {
  const instrument = chooseSound();
  return {
    instrument
  };
};
const createGrid = size => {
  let grid = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const cell = createCell();
      row.push(cell);
    }
    grid.push(row);
  }
  return grid;
};

module.exports = createGrid;
