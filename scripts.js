const boardElement = document.getElementById('board');
const restartButton = document.getElementById('restart');
const currentPlayerDisplay = document.getElementById('currentPlayer');
let currentPlayer = 'X';
let board = Array(9).fill(null);

// Initialize the board
function initBoard() {
    boardElement.innerHTML = '';
    board.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = index;
        cell.addEventListener('click', handleClick);
        boardElement.appendChild(cell);
    });
    updateStatus();
}

// Update the current player display
function updateStatus() {
    currentPlayerDisplay.textContent = currentPlayer;
}

// Handle cell clicks
function handleClick(event) {
    const index = event.target.dataset.index;
    if (board[index] || checkWinner()) return;

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;  // Show X or O in the cell

    if (checkWinner()) {
        setTimeout(() => alert(`${currentPlayer} wins!`), 10);
    } else if (board.every(cell => cell)) {
        setTimeout(() => alert('It\'s a draw!'), 10);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus();  // Update display after the turn
    }
}

// Check for a winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

// Restart the game
function restartGame() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    initBoard();
    updateStatus();  // Reset display
}

// Event listener for restart button
restartButton.addEventListener('click', restartGame);

// Initialize the game
initBoard();
