import React, {Component} from 'react';
import {Squares2X2Icon} from "@heroicons/react/24/outline";

class Apps extends Component {
    render() {
        return (
            <>
                <div className="relative">
                    {/* Bouton Avatar */}
                    <button className="flex items-center space-x-2 p-2 rounded-full">
                        <Squares2X2Icon className="w-[25px]" />
                    </button>

                </div>
            </>
        );
    }
}

export default Apps;