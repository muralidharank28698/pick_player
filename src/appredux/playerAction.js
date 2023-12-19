import axios from "axios"
import { FETCH_PLAYERS_REQUEST,FETCH_PLAYERS_FAILURE,FETCH_PLAYERS_SUCCESS } from "./playerType"

export const fetchPlayersRequest = () => {
    return {
        type: FETCH_PLAYERS_REQUEST
    }
}

export const fetchPlayersSuccess = (allPlayers) => {
    return {
        type: FETCH_PLAYERS_SUCCESS,
        payload : allPlayers
    }
}

export const fetchPlayersFailure = (error) => {
    return {
        type: FETCH_PLAYERS_FAILURE,
        payload : error
    }
}

export const fetchPlayers = () => {
    return (dispatch) =>{
        dispatch(fetchPlayersRequest())
        axios.get("https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json")
        .then(response =>{
            const players = response.data;
            dispatch(fetchPlayersSuccess(players));
        })
        .catch(err =>{
            const errMsg = err.message;
            dispatch(fetchPlayersFailure(errMsg))
        })
    }
}