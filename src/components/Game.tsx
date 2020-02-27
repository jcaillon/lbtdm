import React from 'react';
import Board from './Board';

function calculateWinner(squares: string[]): string | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

interface GameState {
    history: string[][];
    crossIsPlaying: boolean;
}

export default class Game extends React.Component<{}, GameState> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            history: [Array(9).fill(null)],
            crossIsPlaying: true,
        };
    }

    handleClick(i: number): void {
        // object immutability :
        // var player = {score: 1, name: 'Jeff'};
        // var newPlayer = Object.assign({}, player, {score: 2});
        // array immutability :
        const s = this.state.history[this.state.history.length - 1].slice();
        if (calculateWinner(s) || s[i]) {
            return;
        }
        s[i] = this.state.crossIsPlaying ? 'X' : 'O';
        this.setState({
            history: this.state.history.concat([s]),
            crossIsPlaying: !this.state.crossIsPlaying,
        });
    }

    handleMoveClick(moveNumber: number): void {
        this.setState({
            history: this.state.history.slice(0, moveNumber + 1),
            crossIsPlaying: moveNumber % 2 == 0,
        });
    }

    render(): React.ReactElement {
        let status: string;
        const winner = calculateWinner(this.state.history[this.state.history.length - 1]);
        const hasWinner = winner != null;
        if (hasWinner) {
            status = `Winner is: ${winner}.`;
        } else {
            status = `Next player is: ${this.state.crossIsPlaying ? 'X' : 'O'}.`;
        }

        const moves: React.ReactElement[] = this.state.history.map(
            (_squares, idx): React.ReactElement => {
                return (
                    <li key={idx}>
                        <button onClick={(): void => this.handleMoveClick(idx)}>
                            {idx == 0 ? 'Game start' : `Move #${idx}`}
                        </button>
                    </li>
                );
            },
        );

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.history[this.state.history.length - 1]}
                        onClick={(i): void => this.handleClick(i)}
                        crossIsPlaying={this.state.crossIsPlaying}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>
            </div>
        );
    }
}
