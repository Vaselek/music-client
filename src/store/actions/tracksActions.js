import axios from '../../axios-api';

export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const GET_ALBUM_TITLE = 'GET_ALBUM_TITLE';

export const fetchAlbumTracksSuccess = tracks => ({type: FETCH_TRACKS_SUCCESS, tracks});

export const getAlbumTitle = (albumTitle) => ({type: GET_ALBUM_TITLE, albumTitle});

export const fetchAlbumTracks = (albumId) => {
    return dispatch => {
        return axios.get('/tracks?album=' + albumId).then(
            response => dispatch(fetchAlbumTracksSuccess(response.data))
        );
    };
};

