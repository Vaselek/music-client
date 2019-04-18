import axios from '../../axios-api';

export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const GET_ARTIST_NAME = 'GET_ARTIST_NAME';

export const fetchArtistAlbumsSuccess = albums => ({type: FETCH_ALBUMS_SUCCESS, albums});

export const getArtistName = artistName => ({type: GET_ARTIST_NAME, artistName})

export const fetchArtistAlbums = (artistId) => {
    return dispatch => {
        return axios.get('/albums?artist=' + artistId).then(
            response => dispatch(fetchArtistAlbumsSuccess(response.data))
        );
    };
};

