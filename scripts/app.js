const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");

let game;

const renderGame = () => {
    puzzleEl.innerHTML = "";
    guessesEl.innerText = game.statusMessage;

    game.puzzle.split("").forEach(letter => {
        const span = document.createElement("span"); 
        span.innerText = letter;
        puzzleEl.appendChild(span);
    });
}

window.addEventListener("keypress", (e) => {
    if(game.checkStatus()==="playing"){
        const guess = String.fromCharCode(e.charCode);
        game.makeGuess(guess);
        renderGame();
    }
});

const startGame = async () => {
    const puzzle = await getPuzzle("2");
    game = new Hangman(puzzle, 5);
    renderGame();
}

document.querySelector("#reset").addEventListener("click", startGame);

startGame();