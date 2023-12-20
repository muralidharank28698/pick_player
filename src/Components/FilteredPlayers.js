import React from "react";
import "./Style.css"
import store from "../appredux/store";

function FilteredPlayer() {

    const storeData = store.getState();
    const _bowler = storeData?.bowler;
    const _batsman = storeData?.batsman;
    const _allRounders = storeData?.allRounders;
    const _wicketKeeper = storeData?.wicketKeeper;
    const filterPlayers = _bowler?.concat(_batsman, _allRounders, _wicketKeeper);
    return (
            <div className="content">
                <h3 style={{ marginBottom: 20 }}>Picked Players</h3>
                <table border={1}>
                    <tr>
                        <th>ID</th>
                        <th>Player_ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Role</th>
                    </tr>
                    {
                        filterPlayers?.map((player) =>
                            <tr key={player.id}>
                                <td>{player?.id}</td>
                                <td>{player?.player_id}</td>
                                <td>{player?.name}</td>
                                <td>{player?.country}</td>
                                <td>{player?.role}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
    )
}

export default FilteredPlayer;