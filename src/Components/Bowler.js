import React, { useState } from "react";
import "./Style.css"
import { bowler } from "../appredux/playerAction";
import { useDispatch } from "react-redux";

function Bowler({ Bowlers }) {
  const dispatch = useDispatch()
  const [data, setData] = useState([]);
  const handleChange = async (player) => {
    data.push(player);
    await dispatch(bowler(data));
  }

  return (
    <div>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Player_ID</th>
          <th>Name</th>
          <th>Country</th>
          <th>Role</th>
          <th></th>
        </tr>
        {
          Bowlers && Bowlers?.map((player) =>
            <tr key={player.id}>
              <td>{player?.id}</td>
              <td>{player?.player_id}</td>
              <td>{player?.name}</td>
              <td>{player?.country}</td>
              <td>{player?.role}</td>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={() => handleChange(player)}
                />
              </td>
            </tr>
          )
        }
      </table>
    </div>
  )
}

export default Bowler;
