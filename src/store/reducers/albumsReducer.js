import {FETCH_ALBUMS_SUCCESS, GET_ARTIST_NAME} from "../actions/albumsActions";

const initialState = {
    albums: [],
    artistName: ''
};

const reducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case FETCH_ALBUMS_SUCCESS:
            return { ...state, albums: action.albums };
        case GET_ARTIST_NAME:
            return { ...state, artistName: action.artistName };
        default:
            return state
    }
};

export default reducer;