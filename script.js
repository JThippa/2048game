// Define game grid size
const GRID_SIZE = 4;

// Initialize game grid
let grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));

// Function to add a random tile (2 or 4) to an empty cell
function addRandomTile() {
    const availableCells = [];
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            if (grid[i][j] === 0) {
                availableCells.push({ x: i, y: j });
            }
        }
    }
    if (availableCells.length > 0) {
        const { x, y } = availableCells[Math.floor(Math.random() * availableCells.length)];
        grid[x][y] = Math.random() < 0.9 ? 2 : 4; // 90% chance of spawning 2, 10% chance of spawning 4
    }
}

// Function to initialize the game
function initGame() {
    grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
    addRandomTile();
    addRandomTile();
    // Update UI to reflect initial game state
    // This involves updating the DOM to display the grid with tiles
}

// Function to move tiles left
function moveLeft() {
    // Implement logic to move tiles left
}

// Function to move tiles right
function moveRight() {
    // Implement logic to move tiles right
}

// Function to move tiles up
function moveUp() {
    // Implement logic to move tiles up
}

// Function to move tiles down
function moveDown() {
    // Implement logic to move tiles down
}

// Event listeners for arrow keys to control game movements
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        moveUp();
    } else if (event.key === 'ArrowDown') {
        moveDown();
    } else if (event.key === 'ArrowLeft') {
        moveLeft();
    } else if (event.key === 'ArrowRight') {
        moveRight();
    }
});

// Initialize the game when the page loads
window.onload = initGame;