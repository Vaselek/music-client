import axios from '../../axios-api';

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';
export const CREATE_ARTIST_SUCCESS = 'CREATE_ARTIST_SUCCESS';
export const DELETE_ARTIST_SUCCESS = 'DELETE_ARTIST_SUCCESS';
export const PUBLISH_ARTIST_SUCCESS = 'PUBLISH_ARTIST_SUCCESS';

export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});
export const createArtistSuccess = () => ({type: CREATE_ARTIST_SUCCESS});
export const deleteArtistSuccess = () => ({type: DELETE_ARTIST_SUCCESS});
export const publishArtistSuccess = () => ({type: PUBLISH_ARTIST_SUCCESS});

export const fetchArtists = () => {
    return dispatch => {
        return axios.get('/artists').then(
            response => dispatch(fetchArtistsSuccess(response.data))
        );
    };
};

export const createArtist = artistData => {
    return (dispatch) => {
        return axios.post('/artists', artistData).then(
            () => dispatch(createArtistSuccess())
        );
    };
};

export const deleteArtist = artistId => {
    return (dispatch) => {
        return axios.delete('/artists/' + artistId).then(
            () => {
                dispatch(deleteArtistSuccess())
                dispatch(fetchArtists())
            }
        );
    };
};

export const publish = artistId => {
    return (dispatch) => {
        return axios.post('/artists/' + artistId + '/publish').then(
            () => {
                dispatch(publishArtistSuccess())
                dispatch(fetchArtists())
            }
        );
    };
};

