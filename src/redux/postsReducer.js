import { FETCH_HEROS } from "./types";

const initialState = {
    fetchedHeros: []
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_HEROS:
        return { ...state, fetchedHeros: state.fetchedHeros.concat(action.payload) };
    default: return state;
    }
};
