import React, {Component} from 'react';
import {ChatBubbleLeftIcon} from "@heroicons/react/16/solid";


class Chat extends Component {
    render() {
        return (
            <>
                <div className="relative">
                    {/* Bouton Avatar */}
                    <button className="flex items-center space-x-2 p-2 rounded-full">
                        <ChatBubbleLeftIcon className="w-[25px]"/>
                    </button>

                </div>
            </>
        );
    }
}

export default Chat;