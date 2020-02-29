import React, { Component, SyntheticEvent } from 'react';
import Heading from '../Heading';

class Home extends Component {
    label(world: string): string {
        return `Hello ${world}!!!`;
    }

    render(): React.ReactElement {
        return (
            <div className="App">
                <Heading />
                <h2 onClick={Home.handleClick} onContextMenu={this.handleDoubleClick.bind(this)}>
                    {this.label('world <3')}
                </h2>
            </div>
        );
    }

    private handleDoubleClick = (e: SyntheticEvent): void => {
        // we actually create a field that binds to a dynamic function.
        alert(`double click, read label = ${this.label('yop!')}`);
        e.preventDefault();
    }; // semi colon after a field!

    private static handleClick(e: SyntheticEvent): void {
        alert('coucou');
        e.preventDefault();
    }
}

export default Home;
