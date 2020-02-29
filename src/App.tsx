import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React, { Suspense, lazy, Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

class App extends Component {
    render(): React.ReactElement {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/home">Home2</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/home" component={lazy(() => import('./routes/Home'))} />
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return (
        <LinkContainer to="/foo/bar">
            <Button>Foo</Button>
        </LinkContainer>
    );
}

export default App;
