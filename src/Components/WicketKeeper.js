import React, { useState, useEffect } from "react";
import "./Style.css"
import { wicketKeeper } from "../appredux/playerAction";
import { useDispatch } from "react-redux";

function WicketKeeper({ WicketKeeper }) {

  const dispatch = useDispatch()
  const [data, setData] = useState([]);
  const handleChange = async (player) => {
    data.push(player);
    await dispatch(wicketKeeper(data));
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
          <th>
          </th>
        </tr>
        {
          WicketKeeper && WicketKeeper?.map((player) =>
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


export default WicketKeeper;
