import React from "react";

function Header({ playersData, fetchPlayers }) {
    return (
        <div>
            <header class="header-fixed">
                <div class="header-limiter">
                    <h1><a href="/">Pick<span>Player</span></a></h1>
                </div>
            </header>
        </div>
    )
}

export default Header;