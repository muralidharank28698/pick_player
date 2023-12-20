import {
	FETCH_PLAYERS_FAILURE,
	FETCH_PLAYERS_SUCCESS,
	FETCH_PLAYERS_REQUEST,
	WICKET_KEEPER,
	ALL_ROUNDERS,
	BATSMAN,
	BOWLER
} from "./playerType"

const initialState = {
	loading: false,
	players: [],
	error: '',
	wicketKeeper: undefined,
	allRounders: undefined,
	batsman: undefined,
	bowler: undefined
};

function playerReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_PLAYERS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_PLAYERS_SUCCESS:
			return {
				players: action.payload,
				loading: false,
				error: ""
			};
		case FETCH_PLAYERS_FAILURE:
			return {
				loading: false,
				players: [],
				error: action.payload
			};
		case WICKET_KEEPER:
			return {
				...state,
				wicketKeeper: action.payload,
			};
		case ALL_ROUNDERS:
			return {
				...state,
				allRounders: action.payload,
			};
		case BATSMAN:
			return {
				...state,
				batsman: action.payload,
			};
		case BOWLER:
			return {
				...state,
				bowler: action.payload,
			};
		default:
			return state;
	}
}

export default playerReducer;