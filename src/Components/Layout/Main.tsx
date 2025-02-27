import React, {Component} from 'react';
import Header from "./Header.tsx";
import Breadcrumb from "../App/Breadcrumb.tsx";
import Container from "../App/Container.tsx";
import Footer from "./Footer.tsx";

class Main extends Component {
    render() {
        return (
            <>
                <div id="main" className="flex flex-1 h-full flex-col">
                    <Header />
                    <Breadcrumb />
                    <Container />
                    <Footer />
                </div>
            </>
        );
    }
}

export default Main;