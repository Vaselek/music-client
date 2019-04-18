import {FETCH_TRACKS_SUCCESS, GET_ALBUM_TITLE} from "../actions/tracksActions";
import {GET_ARTIST_NAME} from "../actions/albumsActions";

const initialState = {
    tracks: [],
    artistName: '',
    albumTitle: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRACKS_SUCCESS:
            return { ...state, tracks: action.tracks };
        case GET_ARTIST_NAME:
            return { ...state, artistName: action.artistName };
        case GET_ALBUM_TITLE:
            return { ...state, albumTitle: action.albumTitle };
        default:
            return state
    }
};

export default reducer;