<script>
    import Board from './Board.svelte';
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
</style>

<div class="game">
    <div class="game-board">
        <Board />
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