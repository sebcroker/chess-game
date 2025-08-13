console.log("Javascript loaded!")

let rows = 8;
let columns = 8;
let board = [];

for (let i = 0; i < rows; i++) {
  board[i] = []; // Initialize the inner array for each row
  for (let j = 0; j < columns; j++) {
    board[i][j] = 0; // Assign an initial value, e.g., 0
  }
}

console.log(board);