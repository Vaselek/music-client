import axios from '../../axios-api';

export const FETCH_ARTIST_ALBUMS_SUCCESS = 'FETCH_ARTIST_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const GET_ARTIST_NAME = 'GET_ARTIST_NAME';
export const CREATE_ALBUM_SUCCESS = 'CREATE_ALBUM_SUCCESS';
export const DELETE_ALBUM_SUCCESS = 'DELETE_ALBUM_SUCCESS';
export const PUBLISH_ALBUM_SUCCESS = 'PUBLISH_ALBUM_SUCCESS';

export const fetchArtistAlbumsSuccess = albums => ({type: FETCH_ARTIST_ALBUMS_SUCCESS, albums});
export const fetchAlbumsSuccess = albums => ({type: FETCH_ALBUMS_SUCCESS, albums});
export const createAlbumSuccess = () => ({type: CREATE_ALBUM_SUCCESS});
export const deleteAlbumSuccess = () => ({type: DELETE_ALBUM_SUCCESS});
export const publishAlbumSuccess = () => ({type: PUBLISH_ALBUM_SUCCESS});

export const getArtistName = artistName => ({type: GET_ARTIST_NAME, artistName})

export const fetchArtistAlbums = (artistId) => {
    return dispatch => {
        return axios.get('/albums?artist=' + artistId).then(
            response => dispatch(fetchArtistAlbumsSuccess(response.data))
        );
    };
};

export const fetchAlbums = () => {
    return dispatch => {
        return axios.get('/albums').then(
            response => dispatch(fetchAlbumsSuccess(response.data))
        );
    };
};

export const createAlbum = albumData => {
    return (dispatch) => {
        return axios.post('/albums', albumData).then(
            () => dispatch(createAlbumSuccess())
        );
    };
};


export const deleteAlbum = (albumId, artistId) => {
    return (dispatch) => {
        return axios.delete('/albums/' + albumId).then(
            () => {
                dispatch(deleteAlbumSuccess())
                dispatch(fetchArtistAlbums(artistId))
            }
        );
    };
};


export const publish = (albumId, artistId) => {
    return (dispatch) => {
        return axios.post('/albums/' + albumId + '/publish').then(
            () => {
                dispatch(publishAlbumSuccess())
                dispatch(fetchArtistAlbums(artistId))
            }
        );
    };
};


