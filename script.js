// Variables
let grid = [];
const GRID_SIZE = 4;

// Initialize grid with zeros
function initGrid() {
    grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
}

// Add random tile (2 or 4) to an empty cell
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
    initGrid();
    addRandomTile();
    addRandomTile();
    updateGrid();
}

// Update the visual representation of the grid
function updateGrid() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Clear the grid
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            if (grid[i][j] !== 0) {
                tile.textContent = grid[i][j];
            }
            gridContainer.appendChild(tile);
        }
    }
}

// Handle key presses
document.addEventListener('keydown', function(event) {
    event.preventDefault();
    if (event.key === 'ArrowUp') {
        // Handle up arrow key press
    } else if (event.key === 'ArrowDown') {
        // Handle down arrow key press
    } else if (event.key === 'ArrowLeft') {
        // Handle left arrow key press
    } else if (event.key === 'ArrowRight') {
        // Handle right arrow key press
    }
});

// Initialize the game when the page loads
window.onload = initGame;
