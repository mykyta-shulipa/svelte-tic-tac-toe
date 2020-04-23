<script>
    import Board from './Board.svelte';
    import {calculateWinner} from './utils';
    import PastMoves from "./PastMoves.svelte";

    let history = [{
        squares: Array(9).fill(null)
    }];
    let xIsNext = true;

    let status, winner, current;

    let currentIndex = history.length - 1;
    $: current = history[currentIndex];

    $: winner = calculateWinner(current.squares);
    $: if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    function handleClick(i) {
        if (current[i] || winner) {
            return;
        }
        let squares = [...current.squares];
        squares[i] = xIsNext ? 'X' : 'O';

        // history.push({ squares }); ?? 🤔
        // history.push doesn't yet work 😔
        // history[history.length] = { squares }; is working 🤓

        history = [
            ...history.slice(0, currentIndex + 1),
            {squares}
        ];
        xIsNext = !xIsNext;
        currentIndex = history.length - 1;
    }

    function handleMoveClick(moveNumber) {
        currentIndex = moveNumber;
        xIsNext = (moveNumber % 2) === 0;
    }
</script>

<style>
    body {
        font: 14px Futura, sans-serif;
        margin: 20px;
    }

    ol, ul {
        padding-left: 30px;
    }

    .game {
        display: flex;
        flex-direction: row;
    }

    .game-info {
        margin-left: 20px;
    }

    .status {
        margin-bottom: 10px;
    }
</style>

<div class="game">
    <div class="game-board">
        <Board squares={current.squares} handleClick={handleClick} />
    </div>
    <div class="game-info">
        <div class="status">{status}</div>
        <PastMoves history={history} handleClick={handleMoveClick} />
    </div>
</div>