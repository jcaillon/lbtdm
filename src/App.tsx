import React, { Component } from 'react';
import './App.css';
import Heading from './Heading';

class App extends Component {
    label(world: string): string {
        return `Hello ${world}!!!`;
    }

    render(): React.ReactElement {
        return (
            <div className="App">
                <Heading />
                <h2 onClick={App.handleClick} onContextMenu={this.handleDoubleClick}>
                    {this.label('world <3')}
                </h2>
            </div>
        );
    }

    private handleDoubleClick = (): void => {
        // we actually creare a field that binds to a dynamic function.
        alert(`double click, read label = ${this.label('yop!')}`);
    }; // semi colon after a field!

    private static handleClick(): void {
        alert('coucou');
    }
}

export default App;
