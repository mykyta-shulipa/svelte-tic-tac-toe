<script>
    import Square from './Square.svelte';

    let status = 'Next player: X';

    let squares = Array(9).fill(null);
    function handleClick(i) {
        squares[i] = 'X'
    }
</script>
<style>
    .board-row:after {
        clear: both;
        content: "";
        display: table;
    }

    .status {
        margin-bottom: 10px;
    }

</style>

<div class="game-board">
    <div class="status">{status}</div>
    <div class="board-row">
        {#each [0, 1, 2] as i}
            <Square value={squares[i]} handleClick={() => handleClick(i)}
            />
        {/each}
    </div>
    <div class="board-row">
        {#each [3, 4, 5] as i}
            <Square value={squares[i]} handleClick={() => handleClick(i)} />
        {/each}
    </div>
    <div class="board-row">
        {#each [6, 7, 8] as i}
            <Square value={squares[i]} handleClick={() => handleClick(i)} />
        {/each}
    </div>
</div>