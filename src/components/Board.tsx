import React from 'react';

interface BoardProps {
    squares: string[];
    onClick: (i: number) => void;
    crossIsPlaying: boolean;
}

interface SquareProps {
    value: string;
    onClick: () => void;
}

export default class Board extends React.Component<BoardProps> {
    renderSquare(i: number): React.ReactElement {
        return <this.Square2 value={this.props.squares[i]} onClick={(): void => this.props.onClick(i)} />;
    }

    Square2(props: SquareProps): React.ReactElement {
        return (
            <button className="square" onClick={props.onClick}>
                {props.value ? props.value : ''}
            </button>
        );
    }

    render(): React.ReactElement {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
