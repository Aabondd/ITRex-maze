const div = document.getElementById("content");

const newMaze = [
  ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ["#", "+", "+", "+", "#", "+", "+", "+", "#"],
  ["#", "+", "#", "+", "#", "+", "#", "+", "#"],
  ["+", "+", "#", "+", "0", "+", "#", "+", "#"],
  ["#", "#", "#", "+", "#", "#", "#", "#", "#"],
  ["#", "#", "+", "+", "#", "#", "#", "#", "#"],
  ["#", "#", "+", "#", "#", "#", "#", "#", "#"],
  ["#", "#", "#", "#", "#", "#", "#", "#", "#"],
];

function ExitMaze(maze) {
  this.maze = maze;
  this.crossing = function (col, row) {
    if (this.maze[col][row] === undefined) {
      console.log("We have exited the maze");
    } else if (this.maze[col][row] === "+" || this.maze[col][row] === "0") {
      console.log(col, row);
      const textnode = document.createTextNode("drow");
      div.insertAdjacentHTML("beforeend", `<p> Col: ${col} - Row: ${row}</p>`);
      this.maze[col][row] = "visited";
      if (col < this.maze.length) {
        this.crossing(col + 1, row);
      }

      if (row < this.maze[col].length) {
        this.crossing(col, row + 1);
      }

      if (col > 0) {
        this.crossing(col - 1, row);
      }

      if (row > 0) {
        this.crossing(col, row - 1);
      }
    }
  };
}

const maze = new ExitMaze(newMaze);

maze.crossing(3, 4);
