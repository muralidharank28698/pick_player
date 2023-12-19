import React from "react";
import "./Style.css"
import store from "../appredux/store";

function FilteredPlayer() {


    const storeData = store.getState()?.players;

    const filterPlayers = storeData?.filter(item => {
        return item.event_player_credit > 8.5 || (item.role === "Wicket-Keeper" && item?.event_player_credit === 8);
    });


    return (

        <div>
            <h1>List of Filtered Players</h1>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Player_ID</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Role</th>
                    <th>Team_name</th>
                    <th>Team_Id</th>
                    <th>Short_Name</th>
                    <th>Event_player_credit</th>
                    <th>Event_total_points</th>
                </tr>
                {
                    filterPlayers.map((player) =>
                        <tr key={player.id}>
                            <td>{player?.id}</td>
                            <td>{player?.player_id}</td>
                            <td>{player?.name}</td>
                            <td>{player?.country}</td>
                            <td>{player?.role}</td>
                            <td>{player?.team_name}</td>
                            <td>{player?.team_id}</td>
                            <td>{player?.short_name}</td>
                            <td>{player?.event_player_credit}</td>
                            <td>{player?.event_total_points}</td>
                        </tr>
                    )
                }

            </table>


        </div>
    )
}


export default FilteredPlayer;