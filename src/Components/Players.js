import React, { useEffect, useState, } from "react";
import { connect } from "react-redux";
import { fetchPlayers } from "../appredux/playerAction";
import { useSelector, useDispatch } from "react-redux";
import "./Style.css"
import store from "../appredux/store";
import { Link } from 'react-router-dom';

import Bowler from './Bowler';
import Batsman from './Batsman';
import AllRounders from './AllRounders';
import WicketKeeper from "./WicketKeeper";

function Players({ playersData, fetchPlayers }) {
  
  // const [showFilteredPlayers, setShowFilteredPlayers] = useState(false)

  useEffect(() => {
    fetchPlayers()
  }, [])

  // const showSelectedPlayers = () => {
  //   setShowFilteredPlayers(!showFilteredPlayers);
  // }

  // const filterPlayers = playersData?.players?.filter(item => {
  //   return item.event_player_credit > 8.5;
  // });

  return (
    <div>
      <h1>List of players</h1>
      {
        playersData?.loading ? (
          <h2>Loading....</h2>
        ) : (
          playersData?.error ? (
            <h2>
              {playersData?.error}
            </h2>
          ) : (
            <div>
              <table  border={1}>
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
                  playersData && playersData?.players && playersData?.players?.map((player) =>
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
              <Bowler />
              <Batsman />
              <AllRounders />
              <WicketKeeper />

              <div style={{ marginBottom: 60 ,marginTop:80}}>
                <Link to="/filteredPlayers" style={{textDecoration:"none", border:"1px solid gray",padding:15,borderRadius:10,fontSize:18,fontWeight:"bold",backgroundColor:"#3333"}}>Show the filtered players</Link>
              </div>

           
            </div>
          )
        )
      }
    </div>
  )


}

const mapStateToProps = (state) => {
  return {
    playersData: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlayers: () => dispatch(fetchPlayers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);
