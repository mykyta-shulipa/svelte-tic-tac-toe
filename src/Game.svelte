<script>
    import Board from './Board.svelte';
    import { calculateWinner } from './utils';

    let squares = Array(9).fill(null);
    let xIsNext = true;

    let status, winner;
    $: winner = calculateWinner(squares); $: if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    function handleClick(i) {
        if (squares[i] || winner) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        xIsNext = !xIsNext;
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
        <div class="status">{status}</div>
        <Board {squares} handleClick={handleClick} />
    </div>
    <div class="game-info">
    <div>
        <!--        TODO   -->
    </div>
    <ol>
        <!--        TODO   -->
    </ol>
    </div>
</div>