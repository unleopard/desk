import React, {Component} from 'react';
import {BellIcon} from "@heroicons/react/24/outline";

class Notifs extends Component {
    render() {
        return (
            <>
                <div className="relative">
                    {/* Bouton Avatar */}
                    <button className="flex items-center space-x-2 p-2 rounded-full">
                        <BellIcon className="w-[25px]"/>
                    </button>

                </div>
            </>
        );
    }
}

export default Notifs;