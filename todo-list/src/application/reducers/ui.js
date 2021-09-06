import { SET_LOADING_ON, SET_LOADING_OFF } from "../actions/ui";

const initialState = {
    loading: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_ON:
        case SET_LOADING_OFF:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}