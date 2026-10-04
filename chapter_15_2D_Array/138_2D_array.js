let a = [1, 2, 3, 4];

let grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(grid.length);
console.log(grid[0].length);

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        process.stdout(grid[i][j]);
    }
}


