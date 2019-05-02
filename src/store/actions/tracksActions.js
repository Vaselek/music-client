import axios from '../../axios-api';
import {getToken} from "./usersActions";

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const GET_ALBUM_TITLE = 'GET_ALBUM_TITLE';
export const ADD_TO_HISTORY_SUCCESS = 'ADD_TO_HISTORY_SUCCESS';
export const CREATE_TRACK_SUCCESS = 'CREATE_TRACK_SUCCESS';
export const DELETE_TRACK_SUCCESS = 'DELETE_TRACK_SUCCESS';

export const fetchAlbumTracksSuccess = tracks => ({type: FETCH_TRACKS_SUCCESS, tracks});
export const addToHistorySuccess = () => ({type: ADD_TO_HISTORY_SUCCESS});
export const createTrackSuccess = () => ({type: CREATE_TRACK_SUCCESS});
export const deleteTrackSuccess = () => ({type: DELETE_TRACK_SUCCESS});

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
};


export const createTrack = trackData => {
    return (dispatch) => {
        return axios.post('/tracks', trackData).then(
            () => dispatch(createTrackSuccess())
        );
    };
};

export const deleteTrack = (trackId, albumId) => {
    return (dispatch) => {
        return axios.delete('/tracks/' + trackId).then(
            () => {
                dispatch(deleteTrackSuccess())
                dispatch(fetchAlbumTracks(albumId))
            }
        );
    };
};

