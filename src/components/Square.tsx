import React from 'react';

interface SquareProps {
    value: string;
    onClick: () => void;
}

export default class Square extends React.Component<SquareProps> {
    // onClick={this.onButtonClick}.
    onButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        this.setState({
            value: 'X',
        });
    };

    // onClick={(e): void => this.onButtonClick2(e)} // to bind this to the instance.
    // onClick={this.onButtonClick2} // if this can refer to the button itself.
    // onClick={this.onButtonClick2.bind(this)} //another way to bind this to the instance.
    // could also use autoBind(this); in the constructor to bind each method to this instance.
    // manual way, by adding this.onButtonClick2 = this.onButtonClick2.bind(this); in the constructor also works.
    onButtonClick2(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        this.setState({
            value: 'X',
        });
    }

    render(): React.ReactElement {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value ? this.props.value : ''}
            </button>
        );
    }
}
