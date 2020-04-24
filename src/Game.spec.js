import { render, fireEvent } from '@testing-library/svelte';

import Game from './Game.svelte';

describe("Tic Tac Toe Game", () => {
    it("should show first player as 'X'", () => {
        const { getByText } = render(Game);
        expect(getByText("Next player: X"));
    });

    it("Should render 9 squares", async () => {
        // HTMLBodyElement
        const { container } = render(Game);
        const squares =
            container.querySelectorAll(".square");
        expect(squares.length).toEqual(9);
    });

    it("should switch player to 'O' after the turn", async () => {
        const { container, findByText } = render(Game);
        const square = container.querySelector(".square");

        fireEvent.click(square);

        const nextPlayer = findByText("Next player: O");
        expect(nextPlayer).toBeDefined();
    });
});