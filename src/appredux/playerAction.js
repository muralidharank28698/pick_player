import axios from "axios"
import { FETCH_PLAYERS_REQUEST, FETCH_PLAYERS_FAILURE, FETCH_PLAYERS_SUCCESS, WICKET_KEEPER, ALL_ROUNDERS, BATSMAN, BOWLER } from "./playerType"

export const fetchPlayersRequest = () => {
    return {
        type: FETCH_PLAYERS_REQUEST
    }
}

export const fetchPlayersSuccess = (allPlayers) => {
    return {
        type: FETCH_PLAYERS_SUCCESS,
        payload: allPlayers
    }
}

export const fetchPlayersFailure = (error) => {
    return {
        type: FETCH_PLAYERS_FAILURE,
        payload: error
    }
}

export const wicketKeeper = (data) => {
    return {
        type: WICKET_KEEPER,
        payload: data
    }
}
export const allRounders = (data) => {
    return {
        type: ALL_ROUNDERS,
        payload: data
    }
}
export const batsMan = (data) => {
    return {
        type: BATSMAN,
        payload: data
    }
}
export const bowler = (data) => {
    return {
        type: BOWLER,
        payload: data
    }
}

export const fetchPlayers = () => {
    return (dispatch) => {
        dispatch(fetchPlayersRequest())
        axios.get("https://leaguex.s3.ap-south-1.amazonaws.com/task/fantasy-sports/Get_All_Players_of_match.json")
            .then(response => {
                const players = response.data;
                dispatch(fetchPlayersSuccess(players));
            })
            .catch(err => {
                const errMsg = err.message;
                dispatch(fetchPlayersFailure(errMsg))
            })
    }
}