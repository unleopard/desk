import React, {Component} from 'react';
import Nav from './Nav';
import Main from "./Main.tsx";

class Application extends Component {
    render() {
        return (
            <>
                <Nav />
                <Main />
            </>
        );
    }
}

export default Application;