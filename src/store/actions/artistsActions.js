import axios from '../../axios-api';

export const FETCH_ARTISTS_SUCCESS = 'FETCH_ARTISTS_SUCCESS';

export const fetchArtistsSuccess = artists => ({type: FETCH_ARTISTS_SUCCESS, artists});

export const fetchArtists = () => {
    return dispatch => {
        return axios.get('/artists').then(
            response => dispatch(fetchArtistsSuccess(response.data))
        );
    };
};

