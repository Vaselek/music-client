import axios from '../../axios-api';
import {getToken} from "./usersActions";

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const GET_ALBUM_TITLE = 'GET_ALBUM_TITLE';
export const ADD_TO_HISTORY_SUCCESS = 'ADD_TO_HISTORY_SUCCESS';

export const fetchAlbumTracksSuccess = tracks => ({type: FETCH_TRACKS_SUCCESS, tracks});
export const addToHistorySuccess = () => ({type: ADD_TO_HISTORY_SUCCESS});

export const getAlbumTitle = (albumTitle) => ({type: GET_ALBUM_TITLE, albumTitle});

export const fetchAlbumTracks = (albumId) => {
    return dispatch => {
        return axios.get('/tracks?album=' + albumId).then(
            response => dispatch(fetchAlbumTracksSuccess(response.data))
        );
    };
};

export const addToHistory = (trackId) => {
    return (dispatch, getState) => {
        const token = getState().users.user ? getState().users.user.token : getToken();
        if (!token) return;
        return axios.post('/track_histories', {track: trackId}, {headers: {'Authorization': token}}).then(
            response => dispatch(addToHistorySuccess(response.data))
        )
    }
}

