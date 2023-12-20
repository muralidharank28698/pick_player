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
import Header from "./Header";

function Players({ playersData, fetchPlayers }) {

  useEffect(() => {
    fetchPlayers()
  }, [])

  const batsmanData = playersData?.players?.filter(item => {
    return item.role === "Batsman";
  });

  const bowlerData = playersData?.players?.filter(item => {
    return item.role === "Bowler";
  });

  const allRoundersData = playersData?.players?.filter(item => {
    return item.role === "All-Rounder";
  });

  const wicketKeeperData = playersData?.players?.filter(item => {
    return item.role === "Wicket-Keeper";
  });

  return (
    <div className="container">
      {
        playersData?.loading ? (
          <h2>Loading....</h2>
        ) : (
          playersData?.error ? (
            <h2>
              {playersData?.error}
            </h2>
          ) : (
            <div className="content">
              <div className="tableContainer">
                <div className="leftContainer">
                  <h3>Count [{bowlerData?.length}] : Pick 3-7 Bowler</h3>
                  <Bowler Bowlers={bowlerData} />
                </div>
                <div className="rightContainer">
                  <h3>Count [{batsmanData?.length}] : Pick 3-7 Batsman </h3>
                  <Batsman Batsman={batsmanData} />
                </div>
              </div>
              <div className="tableContainer">
                <div className="leftContainer">
                  <h3>Count [{allRoundersData?.length}] : Pick 0-4 All Rounders</h3>
                  <AllRounders AllRounders={allRoundersData} />
                </div>
                <div className="rightContainer">
                  <h3>Count [{wicketKeeperData?.length}] : Pick 1-5 WicketKeeper</h3>
                  <WicketKeeper WicketKeeper={wicketKeeperData} />
                </div>
              </div>
            </div>
          )
        )
      }

      <div style={{ marginBottom: 60, marginTop: 80 }}>
        <Link to="/filteredPlayers" style={{ textDecoration: "none", border: "1px solid gray", padding: 15, borderRadius: 10, fontSize: 18, fontWeight: "bold", backgroundColor: "#3333" }}>Proceed</Link>
      </div>
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
