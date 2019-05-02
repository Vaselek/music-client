import {FETCH_ARTIST_ALBUMS_SUCCESS, GET_ARTIST_NAME, FETCH_ALBUMS_SUCCESS} from "../actions/albumsActions";

const initialState = {
    albums: [],
    artistName: '',
    allAlbums: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ARTIST_ALBUMS_SUCCESS:
            return { ...state, albums: action.albums };
        case FETCH_ALBUMS_SUCCESS:
            return { ...state, allAlbums: action.albums };
        case GET_ARTIST_NAME:
            return { ...state, artistName: action.artistName };
        default:
            return state
    }
};

export default reducer;