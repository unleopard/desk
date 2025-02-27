import React, {Component} from 'react';
import Profil from "./Profil.tsx";
import Application from "./Application.tsx";
import Apps from "./Apps.tsx";
import Notifs from "./Notifs.tsx";
import Chat from "./Chat.tsx";

class Header extends Component {
    render() {
        return (
            <div id="header" className="flex justify-between items-center h-[60px] bg-white border-b border-gray-200">
                <div></div>
                <div className="flex items-center pr-[10px]">
                    <Chat />
                    <Notifs />
                    <Apps />
                    <Profil />
                </div>
            </div>
        );
    }
}

export default Header;