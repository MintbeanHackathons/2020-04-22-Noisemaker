const playAudio = (grid, interval) => {
  let cellNum = 0;
  let intervalId = setInterval(() => {
    if (cellNum === grid.length ** 2) {
      clearInterval(intervalId);
    } else {
      const row = Math.floor(cellNum / grid.length);
      const cell = cellNum - row * grid.length;
      console.log(cellNum, row, cell);
      const sound = new Audio(grid[row][cell].instrument);
      if (grid[row][cell].instrument) sound.play();
      cellNum++;
    }
  }, interval);
};

module.exports = playAudio;
