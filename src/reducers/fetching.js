import { FETCH_WEATHER_PENDING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR } from '../actions/fetching';


const initialState = {
    pending: false,
    data: [],
    error: null
}


export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data
            }
        case FETCH_WEATHER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}