import React, {Component} from 'react';
import TicketForms from "./TicketForms.tsx";
import TicketContent from "./TicketContent.tsx";
import TicketHeader from "./TicketHeader.tsx";
import TicketActions from "./TicketActions.tsx";

class Container extends Component {
    render() {
        return (
            <div id="container" className="flex-1 flex bg-white">
                <TicketForms />
                <TicketContent />
                <TicketHeader />
                <TicketActions  />
            </div>
        );
    }
}

export default Container;