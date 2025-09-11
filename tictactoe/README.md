# Enhanced Tic-Tac-Toe

A strategic twist on the classic tic-tac-toe game built with React. This version limits each player to only 3 pieces on the board at any time, making the game more challenging and strategic.

## 🎮 Game Features

- **3-Piece Limit**: Each player can only have 3 pieces on the board at once
- **Auto-Remove Oldest**: When placing a 4th piece, your oldest piece automatically disappears
- **Classic Win Detection**: Still win by getting 3 in a row (horizontal, vertical, or diagonal)
- **Real-time Status**: Shows current piece count for each player
- **Strategic Gameplay**: Requires planning and positioning as pieces disappear

## 🚀 How to Play

1. Players take turns placing X's and O's on the 3x3 grid
2. Each player can have a maximum of 3 pieces on the board
3. When you place your 4th piece, your oldest piece automatically disappears
4. Win by getting 3 of your pieces in a row (horizontal, vertical, or diagonal)
5. The game becomes more strategic as you must maintain your winning positions while managing disappearing pieces

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/fitowashere/Projects/tree/main/tictactoe
cd tic-tac-toe
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── App.js          # Main tic-tac-toe component
├── App.css         # Styling for the game board
├── index.js        # React entry point
└── index.css       # Global styles
```

## 🧩 Key Components

### `Board` Component
- Main game component managing state and game logic
- Handles player turns and move validation
- Tracks move history for each player
- Manages the 3-piece limit per player

### `Square` Component
- Individual clickable squares on the game board
- Displays X, O, or empty state

### Game Logic
- **Move Tracking**: Uses arrays to track the order of moves for each player
- **Piece Removal**: Automatically removes the oldest piece when limit is exceeded
- **Win Detection**: Classic tic-tac-toe win condition checking

## 🎯 Game Strategy Tips

1. **Early Game**: Focus on center and corner positions
2. **Mid Game**: Plan your moves knowing your oldest piece will disappear
3. **Late Game**: Maintain winning positions while defending against opponent
4. **Advanced**: Try to force opponent into difficult positions where their oldest piece removal helps you

## 🔧 Technical Details

### State Management
- `squares`: Current board state (9-element array)
- `xMoves`/`oMoves`: Arrays tracking move order for each player
- `xIsNext`: Boolean indicating current player's turn
- `scores`: Object tracking wins for each player `{ X: 0, O: 0 }`
- `gameOver`: Boolean preventing moves after game ends

### Key Functions
- `handleClick(i)`: Manages piece placement, removal logic, and win detection
- `calculateWinner(squares)`: Checks for winning combinations
- `resetGame()`: Clears board and starts new game (preserves scores)
- `resetScores()`: Clears the score tracking
- Spread operator (`...`) used for immutable state updates

### CSS Architecture
- Clean separation of concerns with dedicated `style.css`
- Responsive design with flexbox layouts
- Hover effects and visual feedback for better UX

## 🚀 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Future Enhancements

- [ ] Add game reset functionality
- [ ] Implement score tracking across multiple games
- [ ] Add animations for piece placement and removal
- [ ] Create different difficulty levels with varying piece limits
- [ ] Add sound effects and visual feedback
- [ ] Implement online multiplayer functionality

## 🐛 Known Issues

None at this time. Please report any bugs by opening an issue.

---

**Enjoy the strategic challenge!** 🎯