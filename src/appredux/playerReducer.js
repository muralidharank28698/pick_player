import {
	FETCH_PLAYERS_FAILURE,
	FETCH_PLAYERS_SUCCESS,
	FETCH_PLAYERS_REQUEST
} from "./playerType"

const initialState = {
	loading: false,
	players: [],
	error: ''
};

function playerReducer(state = initialState, action) {
	console.log(action);
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
		default:
			return state;
	}
}

export default playerReducer;