import toPascalCase from "../functions/to-pascal-case";

export default function Gameover({gameEndObject, handleNewGame}){

    let isWinner = gameEndObject.isWinner;
    let winnerName = gameEndObject.winnerName;
    let isDraw = gameEndObject.isDraw;

    console.log(`isWinner Gameover; ${isWinner}`);
    console.log(`winnerName: ${winnerName}`);
    console.log(`isDraw: ${isDraw}`);

    return (
        <section id="game-over">

            <h1>Game Over!</h1>
            <p>{isWinner ? `${toPascalCase(winnerName)} won!`: "Draw"}</p>
            <button onClick={handleNewGame}>Start New Game</button>

        </section>
    );
}