import React from 'react';

function Servicedropdown() {
    return (
        <div className="dropdown">

            <div className="expecting-dropdown">
                <button>Expecting</button>
                <ul>
                    <p>This is the expecting dropdown</p>
                </ul>
            </div>

            <div className="postpartum-dropdown">
            <button>Postpartum</button>
                <ul>
                    <p>This is the expecting dropdown</p>
                </ul>
            </div>

            <div className="parenting-dropdown">
            <button>Parenting</button>
                <ul>
                    <p>This is the expecting dropdown</p>
                </ul>
            </div>

            <div className="wellness-dropdown">
            <button>Wellness</button>
                <ul>
                    <p>This is the expecting dropdown</p>
                </ul>
            </div>

        </div>
    );
}

export default Servicedropdown;